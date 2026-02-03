const CACHE_NAME = 'brelinx-v1';
const urlsToCache = [
  '/',
  '/assets/index-CYL0oFyh.css',
  '/assets/index-EZxA1vBU.js',
  '/assets/brelinx-logo-t0tNbuP6.svg',
  '/assets/favicon-Ce0SMHtU.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});