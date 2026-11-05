// Fisio Pedía - Service Worker (Modo 100% Offline para Estudiantes)
const CACHE_NAME = 'fisiopedia-v3-cache';

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/custom.css',
  './js/storage.js',
  './js/firebase-config.js',
  './js/app.js',
  './data/terms.js',
  './data/quizzes.js'
];

// Instalación: Cachear recursos estáticos críticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('ServiceWorker: Advertencia al precachear algunos recursos:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activación: Limpieza de caches antiguos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia: Network-First con Fallback a Cache (o Cache-First para recursos estáticos)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Para peticiones hacia Firebase Firestore o Google Analytics, dejar que la red actúe
  if (req.url.includes('firestore.googleapis.com') || req.url.includes('firebaseio.com')) {
    return;
  }

  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      if (cachedResponse) {
        // En segundo plano revalidar cache
        fetch(req).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(req, networkResponse));
          }
        }).catch(() => {});
        return cachedResponse;
      }

      return fetch(req).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(req, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Fallback a index si es navegación
        if (req.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
