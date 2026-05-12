const CACHE_NAME = "version-1";
const urlsToCache = ["indec.html", "offline.html"];

const self = this;

// Install a service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");

      return cache.addAll(urlsToCache);
    }),
  );
});

// Listen for requests
self.addEventListener("fetch", (event) => {});

// Activate the service worker
self.addEventListener("activate", (event) => {});
