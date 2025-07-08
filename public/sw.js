/**
 * Service Worker for Advanced Caching and Performance Optimization
 */

const CACHE_NAME = 'secondary-glazing-v1';
const RUNTIME_CACHE = 'runtime-cache-v1';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png',
  '/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg'
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache first for static assets
  CACHE_FIRST: 'cache-first',
  // Network first for dynamic content
  NETWORK_FIRST: 'network-first',
  // Stale while revalidate for frequently updated content
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  // Skip waiting to activate immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Claim all clients immediately
  self.clients.claim();
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip cross-origin requests
  if (url.origin !== location.origin) return;

  // Apply appropriate caching strategy
  if (shouldCacheFirst(request)) {
    event.respondWith(cacheFirst(request));
  } else if (shouldUseNetworkFirst(request)) {
    event.respondWith(networkFirst(request));
  } else {
    event.respondWith(staleWhileRevalidate(request));
  }
});

// Cache First Strategy (for static assets)
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('Cache first failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Network First Strategy (for dynamic content)
async function networkFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    return new Response('Offline', { status: 503 });
  }
}

// Stale While Revalidate Strategy (for frequently updated content)
async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  
  // Return cached version immediately if available
  const fetchPromise = fetch(request).then((response) => {
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => cached);

  return cached || fetchPromise;
}

// Determine caching strategy based on request
function shouldCacheFirst(request) {
  const url = new URL(request.url);
  
  // Static assets
  if (url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf)$/)) {
    return true;
  }
  
  // Uploaded assets
  if (url.pathname.startsWith('/lovable-uploads/')) {
    return true;
  }
  
  return false;
}

function shouldUseNetworkFirst(request) {
  const url = new URL(request.url);
  
  // API calls or dynamic content
  if (url.pathname.startsWith('/api/')) {
    return true;
  }
  
  // Contact forms or quotes
  if (url.pathname.includes('contact') || url.pathname.includes('quote')) {
    return true;
  }
  
  return false;
}

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle offline form submissions when back online
  const cache = await caches.open('offline-forms');
  const requests = await cache.keys();
  
  for (const request of requests) {
    try {
      await fetch(request);
      await cache.delete(request);
    } catch (error) {
      console.error('Background sync failed:', error);
    }
  }
}

// Push notifications (for future use)
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png',
    badge: '/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: data.primaryKey
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: '/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});