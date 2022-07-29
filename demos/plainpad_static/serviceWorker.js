const staticApp = "plainpad_static"
const assets = [
  "index.html",
  "index.js",
  "plainpad.js",
  "crm.js",
  "dash.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticApp).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })