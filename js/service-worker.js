// Service Worker Installation and Caching
const CACHE_NAME = 'ops-solutions-cache-v1';
const CACHE_URLS = [
  '/',
  '/index.html',
  '/about.html',
  '/contact.html',
  '/business-operations.html',
  '/contact-center.html',
  '/it-support.html',
  '/professionals.html',
  '/css/global.css',
  '/css/theme.css',
  '/css/forms.css',
  '/css/animations.css',
  '/js/main.js',
  '/js/theme-toggle.js',
  '/js/language-toggle.js',
  '/js/form-handler.js',
  '/js/pwa-service-worker.js',
  '/js/page-specific.js',
  '/assets/images/hero-image.jpg',
  '/assets/images/sample1.jpg',
  '/assets/images/sample2.jpg',
  '/assets/favicon.ico'
];
// Install event - Cache files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching assets during service worker installation');
        return cache.addAll(CACHE_URLS);
      })
  );
});
// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
// Fetch event - Serve from cache or fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // If cache hit, return the cached version
        if (cachedResponse) {
          return cachedResponse;
        }
        // Otherwise, fetch from network and cache for future use
        return fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            // Clone the response to cache it
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
            return networkResponse;
          }
          return networkResponse;
        });
      })
  );
});
