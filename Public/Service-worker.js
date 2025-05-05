// Service Worker – cache inteligente inspirado em grandes players (Tesla, Amazon, Spotify)
const CACHE_NAME = 'hivox-v1';
const ASSETS = [
  '/',                      // rota principal
  '/index.html',            // entrypoint
  '/manifest.json',         // PWA manifest
  '/offline.html',          // fallback offline
  '/icons/pwa-192x192.png', // ícones
  '/icons/pwa-512x512.png',
  '/style.css',             // seu CSS principal
  '/app.js'                 // bundle JS principal
];

// 1. Instalação e pré-cache
self.addEventListener('install', event => {
  console.debug('[SW] Installing and precaching assets');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// 2. Ativação e limpeza de caches antigos
self.addEventListener('activate', event => {
  console.debug('[SW] Activating and cleaning old caches');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// 3. Intercepta requisições: Cache First, Network Fallback
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
       return cached || fetch(event.request).then(response =>
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        })
      );
    }).catch(() => caches.match('/offline.html'))
  );
});Enter
