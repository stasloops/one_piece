const CACHE_NAME = 'version-1'
const assetsUrls = [
    'index.html',
    // '/index.js',
]

this.addEventListener('install', async (event) => {
    const cache = await caches.open(CACHE_NAME)
    await cache.addAll(assetsUrls)
})

this.addEventListener('activate', (event) => {
    // console.log('[SW]: activate');
})



this.addEventListener('fetch', (event) => {
    event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}
