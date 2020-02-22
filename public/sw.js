var cacheName = 'mensajes-gratis';
var filesToCache = [
  '/',
  '/index.html',
  '/404.html',
  '/css/index.css',
  '/js/basicView.js',
  '/js/creatorPopup.js',
  '/js/deliveryFailed.js',
  '/js/deliverySucceded.js',
  '/js/eventListeners.js',
  '/js/goPremiumPopup.js',
  '/js/loading.js',
  '/js/main.js',
  '/js/saveMessages.js',
  '/js/showMessages.js',
  '/objetos/close.svg',
  '/objetos/failure.svg',
  '/objetos/favicon.png',
  '/objetos/loading.gif',
  '/objetos/medal.svg',
  '/objetos/options.svg',
  '/objetos/picture.jpg',
  '/objetos/success.svg',
  '/fonts/Gotham-Bold.ttf',
  '/fonts/Gotham-Book.ttf',
  '/fonts/Gotham-Light.ttf',
  '/fonts/Gotham-Medium.ttf',
  '/fonts/Gotham-Ultra.ttf',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png'
];
self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request);
    })
  );
});