
var cacheName = 'Raincife+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        '/',
        './index.html',
        './homes.html',
        './map.js',
        './manifest.json',
        './css/homes.css',
        './css/login.css',
        './js/home.js',
        './js/login.js',
        './js/points.js',
        './resources/AppIcons/playstore.png',
        './resources/AppIcons/appstore.png',
        './resources/AppIcons/android/mipmap-hdpi/icon.png',
        './resources/AppIcons/android/mipmap-mdpi/icon.png',
        './resources/AppIcons/android/mipmap-xhdpi/icon.png',
        './resources/AppIcons/android/mipmap-xxhdpi/icon.png',
        './resources/AppIcons/android/mipmap-xxxhdpi/icon.png',
        
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});

