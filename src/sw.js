const CACHE_NAME = 'hivox-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo192.png',
  '/logo512.png',
  '/favicon.ico',
  '/style.css',
  '/app.js',
  // Adicione outros arquivos essenciais do seu projeto
];

// Instala e pré-cacheia os recursos essenciais
self.addEventListener('install', event => {
  console.log('[Service Worker] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[Service Worker] Pré-cache dos arquivos');
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Ativa o SW e limpa caches antigos se necessário
self.addEventListener('activate', event => {
  console.log('[Service Worker] Ativando e limpando caches antigos...');
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Intercepta requisições e responde com cache ou rede
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Retorna resposta do cache
        return cachedResponse;
      }

      // Busca da rede e atualiza o cache
      return fetch(event.request).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          // Atualiza o cache para futuras visitas
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    }).catch(() => {
      // Resposta offline personalizada se desejar
      return caches.match('/offline.html');
    })
  );
});
