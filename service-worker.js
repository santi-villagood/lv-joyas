/* Service worker: hace la app instalable y le da un respaldo sin conexión.
   Estrategia: primero la red (así siempre ves la versión nueva) y, si no hay
   internet, usa lo último que quedó guardado. Subí el número de VERSION cuando
   agregues archivos nuevos a la lista. */
const VERSION = "joyas-v1";
const ARCHIVOS = [
  "./", "app.html", "index.html", "admin.html",
  "style.css", "config.js", "manifest.json",
  "icons/icon-192.png", "icons/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== location.origin) return; // Supabase y CDN van directo a la red
  e.respondWith(
    fetch(req)
      .then(res => { const copia = res.clone(); caches.open(VERSION).then(c => c.put(req, copia)); return res; })
      .catch(() => caches.match(req).then(m => m || caches.match("app.html")))
  );
});
