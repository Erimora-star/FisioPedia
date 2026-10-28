// Fisio Pedía - Capa de Abstracción de Datos y Sincronización en la Nube
// Arquitectura híbrida: LocalStorage (Offline-first) + Firebase Firestore (Tiempo Real)

const FisioStorage = (function () {
  'use strict';

  const STORAGE_KEYS = {
    FAVORITES: 'fisiopedia_favs_v2',
    QUIZ_HISTORY: 'fisiopedia_quiz_hist_v1',
    STUDY_STREAK: 'fisiopedia_streak_v1',
    FIREBASE_CONFIG: 'fisiopedia_firebase_config_v2',
    LAST_SYNC: 'fisiopedia_last_sync_v1'
  };

  const DEFAULT_FAVORITES = [
    'propiocepcion',
    'flexion-extension',
    'tendon-aquiles',
    'lca',
    'manguito-rotador'
  ];

  // Bus de eventos interno para reactividad en la UI
  const subscribers = {
    'status-changed': [],
    'favorites-updated': [],
    'stats-updated': [],
    'sync-completed': []
  };

  function notify(event, payload) {
    if (subscribers[event]) {
      subscribers[event].forEach(cb => {
        try {
          cb(payload);
        } catch (err) {
          console.error(`FisioStorage notify error [${event}]:`, err);
        }
      });
    }
  }

  // ==========================================
  // --- MODO LOCAL (LocalStorage Seguro) ---
  // ==========================================
  const LocalAdapter = {
    getFavorites: function () {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.FAVORITES);
        return raw ? JSON.parse(raw) : DEFAULT_FAVORITES;
      } catch (e) {
        console.warn('FisioStorage LocalAdapter: error leyendo favoritos', e);
        return DEFAULT_FAVORITES;
      }
    },

    saveFavorites: function (favArray) {
      try {
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favArray));
        return true;
      } catch (e) {
        console.error('FisioStorage LocalAdapter: error guardando favoritos', e);
        return false;
      }
    },

    getQuizStats: function () {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.QUIZ_HISTORY);
        return raw ? JSON.parse(raw) : { totalAttempted: 0, totalCorrect: 0, lastScore: 0, streak: 4 };
      } catch (e) {
        return { totalAttempted: 0, totalCorrect: 0, lastScore: 0, streak: 4 };
      }
    },

    saveQuizStats: function (stats) {
      try {
        localStorage.setItem(STORAGE_KEYS.QUIZ_HISTORY, JSON.stringify(stats));
        return true;
      } catch (e) {
        console.error('FisioStorage LocalAdapter: error guardando stats', e);
        return false;
      }
    },

    getFirebaseConfig: function () {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.FIREBASE_CONFIG);
        if (raw) return JSON.parse(raw);
      } catch (e) {
        console.warn('FisioStorage: error leyendo config guardada', e);
      }
      if (typeof window !== 'undefined' && window.FISIOPEDIA_FIREBASE_CONFIG) {
        return window.FISIOPEDIA_FIREBASE_CONFIG;
      }
      return null;
    },

    saveFirebaseConfig: function (cfg) {
      try {
        localStorage.setItem(STORAGE_KEYS.FIREBASE_CONFIG, JSON.stringify(cfg));
        return true;
      } catch (e) {
        return false;
      }
    },

    clearFirebaseConfig: function () {
      try {
        localStorage.removeItem(STORAGE_KEYS.FIREBASE_CONFIG);
        return true;
      } catch (e) {
        return false;
      }
    },

    getLastSync: function () {
      return localStorage.getItem(STORAGE_KEYS.LAST_SYNC) || null;
    },

    setLastSync: function (isoDate) {
      localStorage.setItem(STORAGE_KEYS.LAST_SYNC, isoDate || new Date().toISOString());
    }
  };

  // ==========================================
  // --- MODO NUBE (Firebase & Firestore) ---
  // ==========================================
  const FirebaseAdapter = {
    status: 'unconfigured', // 'unconfigured' | 'connecting' | 'connected' | 'error'
    statusMessage: 'Operando en almacenamiento local del dispositivo',
    app: null,
    auth: null,
    db: null,
    currentUser: null,
    unsubscribeFavs: null,
    unsubscribeStats: null,
    activeConfig: null,

    setStatus: function (newStatus, msg = '') {
      this.status = newStatus;
      this.statusMessage = msg;
      notify('status-changed', {
        status: newStatus,
        message: msg,
        user: this.currentUser ? { uid: this.currentUser.uid, isAnonymous: this.currentUser.isAnonymous } : null,
        projectId: this.activeConfig ? this.activeConfig.projectId : null,
        lastSync: LocalAdapter.getLastSync()
      });
    },

    init: async function (config) {
      if (!config || !config.apiKey || !config.projectId || config.apiKey === "TU_API_KEY_DE_FIREBASE") {
        this.setStatus('unconfigured', 'Configuración de Firebase no proporcionada. Usando LocalStorage.');
        return false;
      }

      if (typeof window.firebase === 'undefined') {
        this.setStatus('error', 'El SDK de Firebase no está disponible en el navegador.');
        return false;
      }

      try {
        this.setStatus('connecting', 'Conectando con Google Firebase & Cloud Firestore...');
        this.activeConfig = config;

        // Inicializar o reutilizar app existente
        if (window.firebase.apps && window.firebase.apps.length > 0) {
          const existingApp = window.firebase.apps.find(a => a.name === '[DEFAULT]');
          this.app = existingApp || window.firebase.initializeApp(config);
        } else {
          this.app = window.firebase.initializeApp(config);
        }

        this.auth = window.firebase.auth();
        this.db = window.firebase.firestore();

        // Autenticación anónima silenciosa para crear espacio privado por usuario sin forzar login
        if (!this.auth.currentUser) {
          try {
            const cred = await this.auth.signInAnonymously();
            this.currentUser = cred.user;
          } catch (authErr) {
            console.warn('FisioStorage: signInAnonymously falló, intentando operar con usuario existente:', authErr);
          }
        } else {
          this.currentUser = this.auth.currentUser;
        }

        // Suscribirse a cambios de estado de autenticación
        this.auth.onAuthStateChanged(async (user) => {
          if (user) {
            this.currentUser = user;
            await this.attachRealtimeListeners(user.uid);
            await this.initialCloudSync(user.uid);
            this.setStatus('connected', `Conectado a Firestore (Proyecto: ${config.projectId})`);
          } else {
            this.currentUser = null;
            this.setStatus('unconfigured', 'Sesión cerrada en Firebase.');
          }
        });

        if (this.currentUser) {
          await this.attachRealtimeListeners(this.currentUser.uid);
          await this.initialCloudSync(this.currentUser.uid);
          this.setStatus('connected', `Conectado a Firestore (Proyecto: ${config.projectId})`);
        }

        return true;
      } catch (err) {
        console.error('FisioStorage: Error al inicializar Firebase:', err);
        this.setStatus('error', `Error al inicializar Firebase: ${err.message}`);
        return false;
      }
    },

    attachRealtimeListeners: async function (uid) {
      if (!this.db) return;

      // Limpiar listeners previos
      if (this.unsubscribeFavs) this.unsubscribeFavs();
      if (this.unsubscribeStats) this.unsubscribeStats();

      try {
        // Escuchar cambios de Favoritos en la nube
        const favDocRef = this.db.collection('users').doc(uid).collection('data').doc('favorites');
        this.unsubscribeFavs = favDocRef.onSnapshot((docSnapshot) => {
          if (docSnapshot && docSnapshot.exists) {
            const data = docSnapshot.data();
            if (data && Array.isArray(data.items)) {
              // Guardar copia local y notificar UI
              LocalAdapter.saveFavorites(data.items);
              LocalAdapter.setLastSync();
              notify('favorites-updated', data.items);
            }
          }
        }, (err) => {
          console.warn('FisioStorage: Listener de favoritos en Firestore arrojó advertencia:', err.message);
        });

        // Escuchar cambios de Estadísticas de Quiz
        const statsDocRef = this.db.collection('users').doc(uid).collection('data').doc('quiz_stats');
        this.unsubscribeStats = statsDocRef.onSnapshot((docSnapshot) => {
          if (docSnapshot && docSnapshot.exists) {
            const data = docSnapshot.data();
            if (data) {
              LocalAdapter.saveQuizStats(data);
              LocalAdapter.setLastSync();
              notify('stats-updated', data);
            }
          }
        }, (err) => {
          console.warn('FisioStorage: Listener de estadísticas en Firestore arrojó advertencia:', err.message);
        });
      } catch (e) {
        console.error('FisioStorage: Error conectando listeners de Firestore:', e);
      }
    },

    initialCloudSync: async function (uid) {
      if (!this.db) return;
      try {
        const favDocRef = this.db.collection('users').doc(uid).collection('data').doc('favorites');
        const doc = await favDocRef.get();

        const localFavs = LocalAdapter.getFavorites();

        if (!doc.exists) {
          // Primera vez: subir favoritos locales a Firestore
          await favDocRef.set({
            items: localFavs,
            updatedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
            platform: 'FisioPedia Web Client'
          });
        } else {
          // Ya existe en la nube: fusionar conjuntos para no perder nada
          const remoteData = doc.data();
          const remoteFavs = Array.isArray(remoteData.items) ? remoteData.items : [];
          const merged = Array.from(new Set([...localFavs, ...remoteFavs]));
          LocalAdapter.saveFavorites(merged);
          if (merged.length !== remoteFavs.length) {
            await favDocRef.set({
              items: merged,
              updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
          }
          notify('favorites-updated', merged);
        }

        LocalAdapter.setLastSync();
        notify('sync-completed', { timestamp: new Date().toISOString() });
      } catch (syncErr) {
        console.warn('FisioStorage: Sincronización inicial con Firestore con advertencia:', syncErr.message);
      }
    },

    saveFavorites: async function (favArray) {
      // 1. Guardado inmediato en local
      LocalAdapter.saveFavorites(favArray);

      // 2. Si Firebase está activo, enviar a Firestore
      if (this.status === 'connected' && this.db && this.currentUser) {
        try {
          const favDocRef = this.db.collection('users').doc(this.currentUser.uid).collection('data').doc('favorites');
          await favDocRef.set({
            items: favArray,
            updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
          LocalAdapter.setLastSync();
        } catch (err) {
          console.error('FisioStorage: Error guardando favoritos en Firestore:', err);
        }
      }
    },

    saveQuizStats: async function (stats) {
      // 1. Guardar en local
      LocalAdapter.saveQuizStats(stats);

      // 2. Si Firebase está activo, enviar a Firestore
      if (this.status === 'connected' && this.db && this.currentUser) {
        try {
          const statsDocRef = this.db.collection('users').doc(this.currentUser.uid).collection('data').doc('quiz_stats');
          await statsDocRef.set({
            ...stats,
            updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true });

          // Registrar intento en el historial
          const attemptsCol = this.db.collection('users').doc(this.currentUser.uid).collection('quiz_attempts');
          await attemptsCol.add({
            ...stats,
            timestamp: window.firebase.firestore.FieldValue.serverTimestamp()
          });

          LocalAdapter.setLastSync();
        } catch (err) {
          console.error('FisioStorage: Error guardando stats en Firestore:', err);
        }
      }
    },

    testConnection: async function (config) {
      if (!config || !config.apiKey || !config.projectId) {
        return { success: false, message: 'Faltan campos obligatorios (apiKey o projectId).' };
      }

      if (typeof window.firebase === 'undefined') {
        return { success: false, message: 'El SDK de Firebase no está cargado en la página.' };
      }

      let testApp = null;
      try {
        const testAppName = `test-app-${Date.now()}`;
        testApp = window.firebase.initializeApp(config, testAppName);
        const testAuth = testApp.auth();
        const userCred = await testAuth.signInAnonymously();
        const testDb = testApp.firestore();

        // Intento de escritura y lectura de comprobación
        const pingRef = testDb.collection('system_check').doc('connectivity_ping');
        await pingRef.set({
          lastPing: window.firebase.firestore.FieldValue.serverTimestamp(),
          testerUid: userCred.user.uid
        }, { merge: true });

        await testApp.delete();
        return { success: true, message: '¡Conexión y permisos verificados con éxito en Cloud Firestore!' };
      } catch (testErr) {
        if (testApp) {
          try { await testApp.delete(); } catch (_) {}
        }
        return { success: false, message: testErr.message || 'Error de autenticación o reglas en Firestore.' };
      }
    },

    disconnect: async function () {
      if (this.unsubscribeFavs) this.unsubscribeFavs();
      if (this.unsubscribeStats) this.unsubscribeStats();
      if (this.auth) {
        try { await this.auth.signOut(); } catch (_) {}
      }
      this.currentUser = null;
      this.activeConfig = null;
      LocalAdapter.clearFirebaseConfig();
      this.setStatus('unconfigured', 'Desconectado de Firebase. Modo Local activo.');
    }
  };

  // Auto-arranque al cargar
  setTimeout(() => {
    const savedConfig = LocalAdapter.getFirebaseConfig();
    if (savedConfig && savedConfig.apiKey && savedConfig.projectId && savedConfig.apiKey !== "TU_API_KEY_DE_FIREBASE") {
      FirebaseAdapter.init(savedConfig);
    } else {
      FirebaseAdapter.setStatus('unconfigured', 'Operando en almacenamiento local del dispositivo');
    }
  }, 300);

  // ==========================================
  // --- API PÚBLICA UNIFICADA ---
  // ==========================================
  return {
    // Favoritos
    getFavorites: () => LocalAdapter.getFavorites(),
    saveFavorites: (favs) => FirebaseAdapter.saveFavorites(favs),

    // Estadísticas de Cuestionarios
    getQuizStats: () => LocalAdapter.getQuizStats(),
    saveQuizStats: (stats) => FirebaseAdapter.saveQuizStats(stats),

    // Estado de la nube y configuración
    getCloudStatus: () => ({
      status: FirebaseAdapter.status,
      message: FirebaseAdapter.statusMessage,
      user: FirebaseAdapter.currentUser ? {
        uid: FirebaseAdapter.currentUser.uid,
        isAnonymous: FirebaseAdapter.currentUser.isAnonymous
      } : null,
      projectId: FirebaseAdapter.activeConfig ? FirebaseAdapter.activeConfig.projectId : null,
      lastSync: LocalAdapter.getLastSync(),
      config: LocalAdapter.getFirebaseConfig()
    }),

    saveCloudConfig: async function (config) {
      LocalAdapter.saveFirebaseConfig(config);
      return await FirebaseAdapter.init(config);
    },

    disconnectCloud: async function () {
      return await FirebaseAdapter.disconnect();
    },

    testCloudConnection: async function (config) {
      return await FirebaseAdapter.testConnection(config);
    },

    syncNow: async function () {
      if (FirebaseAdapter.currentUser) {
        await FirebaseAdapter.initialCloudSync(FirebaseAdapter.currentUser.uid);
        return true;
      }
      return false;
    },

    // Suscripciones reactivas
    subscribe: function (event, callback) {
      if (subscribers[event]) {
        subscribers[event].push(callback);
      }
    }
  };
})();
