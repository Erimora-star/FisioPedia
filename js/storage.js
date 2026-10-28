// Fisio Pedía - Capa de Abstracción de Datos y Almacenamiento
// Diseñada para operar localmente (localStorage) y facilitar la migración futura a Firebase / Firestore.

const FisioStorage = (function () {
  'use strict';

  const STORAGE_KEYS = {
    FAVORITES: 'fisiopedia_favs_v2',
    QUIZ_HISTORY: 'fisiopedia_quiz_hist_v1',
    STUDY_STREAK: 'fisiopedia_streak_v1',
    USER_PREFS: 'fisiopedia_prefs_v1'
  };

  // --- MODO LOCAL (LocalStorage) ---
  const LocalAdapter = {
    getFavorites: function () {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.FAVORITES);
        return raw ? JSON.parse(raw) : ['propiocepcion', 'flexion-extension', 'tendon-aquiles', 'lca', 'manguito-rotador'];
      } catch (e) {
        console.warn('FisioStorage LocalAdapter: error leyendo favoritos', e);
        return ['propiocepcion', 'flexion-extension'];
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
        return false;
      }
    }
  };

  // --- MODO NUBE (Firebase / Firestore Placeholder) ---
  // Cuando el usuario configure sus credenciales de Firebase, se activará este adaptador.
  const FirebaseAdapter = {
    isConfigured: false,
    db: null,

    init: function (firebaseConfig) {
      // Punto de enganche para Firebase SDK:
      // firebase.initializeApp(firebaseConfig);
      // this.db = firebase.firestore();
      // this.isConfigured = true;
      console.log('FisioStorage: Firebase Adapter inicializado en modo puente.');
    },

    syncWithCloud: async function (userId) {
      if (!this.isConfigured) return;
      // Sincronización bidireccional con colección 'users/{userId}/favorites'
    }
  };

  // API Pública unificada
  return {
    // Favoritos
    getFavorites: () => LocalAdapter.getFavorites(),
    saveFavorites: (favs) => LocalAdapter.saveFavorites(favs),
    
    // Estadísticas de Cuestionarios
    getQuizStats: () => LocalAdapter.getQuizStats(),
    saveQuizStats: (stats) => LocalAdapter.saveQuizStats(stats),

    // Hook preparado para Firebase
    initFirebase: (config) => FirebaseAdapter.init(config),
    isFirebaseReady: () => FirebaseAdapter.isConfigured
  };
})();
