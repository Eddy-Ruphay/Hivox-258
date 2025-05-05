const CACHE_NAME = 'hivox-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/pwa-192x192.png',
  '/icons/pwa-512x512.png',
  '/favicon.ico',
  '/offline.html',
  '/style.css',
  '/app.js'
];

// Instala e pré-cacheia recursos
self.addEventListener('install', event => {
  console.log('[SW] Instalando e pré-cache de assets');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Ativa e limpa caches antigos
self.addEventListener('activate', event => {
  console.log('[SW] Ativando e limpando caches antigos');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Intercepta fetch e usa cache first, network fallback
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response =>
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        })
      );
    }).catch(() => caches.match('/offline.html'))
  );
});
