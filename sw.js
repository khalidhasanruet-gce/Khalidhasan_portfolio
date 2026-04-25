const CACHE_NAME = "khalid-portfolio-v1";

const urlsToCache = [
  "/Khalidhasan_portfolio/",
  "/Khalidhasan_portfolio/index.html",
  "/Khalidhasan_portfolio/style.css",
  "/Khalidhasan_portfolio/about.html",
  "/Khalidhasan_portfolio/research.html",
  "/Khalidhasan_portfolio/laboratory.html",
  "/Khalidhasan_portfolio/publications.html",
  "/Khalidhasan_portfolio/contact.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
