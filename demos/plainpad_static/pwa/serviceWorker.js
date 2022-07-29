const staticApp = "dummy"
const assets = [
  'https://jacobhoffman.tk/rectangles/demos/plainpad_static/index.html',
  'https://jacobhoffman.tk/rectangles/demos/plainpad_static/index.js',
  'https://jacobhoffman.tk/rectangles/demos/plainpad_static/plainpad.js',
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