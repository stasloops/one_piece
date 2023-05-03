const CACHE_NAME = 'version-3'
const assetUrls = [
    'index.html',
]



async function cacheFirst(request) {
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(assetUrls)
            })
    )
})


this.addEventListener('fetch', (event) => {
    event.respondWith(cacheFirst(event.request))
})


this.addEventListener('activate', async (event) => {
    const cacheNames = await caches.keys()
    await Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
            .map(name => caches.delete(name))
    )
})


