const CACHE_NAME = 'version-3'
const assetUrls = [
    'index.html',
    // 'index.js',
]


async function cacheFirst(request) {
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}

this.addEventListener('install', async (event) => {
    const cache = await caches.open(CACHE_NAME)
    await cache.addAll(assetUrls)
})

this.addEventListener('activate', async (event) => {
    const cacheNames = await caches.keys()
    await Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
            .map(name => caches.delete(name))
    )
})


this.addEventListener('fetch', (event) => {
    event.respondWith(cacheFirst(event.request))
})

