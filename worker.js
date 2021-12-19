/* eslint-disable no-restricted-globals */
//name of your app
const CACHE_NAME = 'v1_mi_portafolio';
//include all routes used in app
const urlsToCache = [
  './',
  './index.html',
  './favicon-16x16.png',
  './android-chrome-384x384.png',
  './android-chrome-512x512.png',
  './android-icon-144x144.png',
  './android-icon-192x192.png',
  './android-icon-48x48.png',
  './AnduLogoTouch.png',
  './favicon-32x32.png',
  './favicon-64x64.ico',
  './favicon-96x96.png',
  './ms-icon-310x310.png'
];

// Install a service worker(se almacena en caché los activos estaticos)
self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>{
      console.log('Opened cache');
      return cache.addAll(urlsToCache)
        .then(()=>self.skipWaiting())
    })
    .catch(err=>console.log("fallo registro de cache", err))
  );
});

// Cache and return requests
self.addEventListener('fetch', (event) => {
  //responde ya sea con el objeto en caché o continuar y busca la url real
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // recupera la petición a la url
        return fetch(event.request);
      })
  );
});

// Update a service worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        cacheNames.map((cacheName) => {
          //eliminamos lo que ya no se necesita en cache
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
    })
    //le indica al SW activar el cache actual
    .then((self.clients.claim()))
  );
});