/**
 * Self-destructing service worker.
 * The previous caching worker served stale hashed asset chunks, which made the
 * app hang on the loading spinner. This version clears all caches and removes
 * itself from any browser that still has it installed.
 */

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});

// Always go to the network while this worker is still alive.
self.addEventListener('fetch', () => {});
