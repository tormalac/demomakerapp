const CACHE_NAME = 'demomaker-v1';
const urlsToCache = [
  'index.html',
  'demomaker.css',
  'demomaker.js',
  'fx-engine.js',
  'synth-engine.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});