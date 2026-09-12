// Bump this string every time index.html/manifest.json/icons change so phones
// that already installed the app pick up the update next time they have signal.
const CACHE_NAME = "lostlands-2026-v19";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.svg",
  "./icon-180.png",
  "./icon-512.png",
  "./map.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache-first, falling back to network, updating the cache in the background
// when a connection exists. Never blocks on a network round trip.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      // "reload" bypasses the browser's own HTTP cache so this revalidation
      // check is meaningful even if a server response header lapses -
      // otherwise a stale HTTP-cached response could get handed right back
      // to us and re-stored, silently defeating the point of this fetch.
      const network = fetch(event.request, { cache: "reload" })
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
