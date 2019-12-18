self.addEventListener('install', (event) => {
    console.log('Installed')
    event.waitUntil(
        caches.open('static').then((cache) => {
            cache.addAll([
                '/',
                '/index.html',
                '/css/app.css',
                '/js/app.js',
                '/img/favicon.png',
                '/img/icons/app-icon-96x96.png',
                '/img/icons/app-icon-144x144.png',
                '/img/icons/app-icon-256x256.png',
                '/img/icons/app-icon-512x512.png',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
                'https://fonts.googleapis.com/css?family=Roboto+Mono'
            ])
        })
    )
})

self.addEventListener('activate', (event) => {
    console.log('Activated')
})

self.addEventListener('fetch', (event) => {
    event.respondwith(
        caches.match(event.request).then((res) => {
            if (res) {
                return res
            } else {
                return fetch(event.request)
            }
        })
    )
})