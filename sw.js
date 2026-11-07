// Fisio Pedía - Service Worker (Modo 100% Offline para Estudiantes)
const CACHE_NAME = 'fisiopedia-v8-final';

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/custom.css'
];

// Instalación: Cachear recursos estructurales base y activar de inmediato
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('ServiceWorker: Advertencia al precachear activos base:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activación: Purga agresiva de todos los cachés antiguos (v1, v2, v3, v4, v5, etc.)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('ServiceWorker: purgando caché antiguo:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia: Desactivar interceptación de scripts .js para garantizar siempre código fresco sin errores de caché
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Bypasear scripts JS, JSON y llamadas dinámicas a APIs para que el navegador los descargue directamente
  if (
    req.url.endsWith('.js') ||
    req.url.includes('/js/') ||
    req.url.includes('/data/') ||
    req.url.includes('firestore.googleapis.com') ||
    req.url.includes('firebaseio.com') ||
    req.url.includes('gstatic.com') ||
    req.url.includes('googleapis.com')
  ) {
    return;
  }

  // Network-first para el HTML y estilos con fallback offline
  event.respondWith(
    fetch(req)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(req).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (req.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
