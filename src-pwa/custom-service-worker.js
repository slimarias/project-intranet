/*
 * This file (which will be your service worker)
 * is picked up by the build system if BOTH conditions are met:
 *  - You are building for production
 *  - quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

/* global workbox */
if (workbox) {
  workbox.precaching.precache(self.__precacheManifest)

  const baseUrl = 'https://modulos.imaginacolombia.com'

  // Set a name for the current cache
  var shellCacheName = 'app_cache';
  var filesToCache = []
// Default files to always cache
  self.__precacheManifest.forEach(file =>{
    filesToCache.push(file.url)
  })

  self.__precacheManifest = [].concat(self.__precacheManifest || []);

  // Listen to installation event
  self.addEventListener('install', function(event) {

    event.waitUntil(
      caches.open(shellCacheName).then(function(cache) {
        // Important to `return` the promise here to have `skipWaiting()`
        // fire after the cache has been updated.
        return cache.addAll(filesToCache);
      })
    );
    self.skipWaiting();

  });

  self.addEventListener('activate', function(e) {

    e.waitUntil(
      // Get all cache containers
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          // Check and remove invalid cache containers
          if (key !== shellCacheName) {

            return caches.delete(key);
          }
        }));
      })
    )

    // Enforce immediate scope control
    return self.clients.claim();
  });

  self.addEventListener('message', event => {

    if (event.data.msg === 'clearCache') {

      event.waitUntil(
        // Get all cache containers
        caches.keys().then(function(keyList) {
          return Promise.all(keyList.map(function(key) {
            return caches.delete(key);

          }));
        })
      )
      event.waitUntil(
        caches.open(shellCacheName).then(function(cache) {
          // Important to `return` the promise here to have `skipWaiting()`
          // fire after the cache has been updated.
          return cache.addAll(filesToCache);
        })

      )

    }
  });

  //Network falling back to the cache

  self.addEventListener('fetch', function(event) {
    var requestUrl = event.request.url

    if(requestUrl.startsWith(baseUrl))
      if (event.request.clone().method === 'GET') {
        event.respondWith(
          fetch(event.request)
            .then(response => {
              //console.warn("fetch SW: ", response)
              //Make copy/clone of response
              const resClone = response.clone();

              caches  //Open cache
                .open(shellCacheName)
                .then(cache => {
                  cache.put(event.request, resClone)
                })
              return response;
            }).catch(err => caches.match(event.request).then(res => res))
        );
      }
  });

  self.addEventListener('push', (event) => {
    console.log('Received a push event', event)

    const title = 'En Red Group';
    const options = {
      body: 'Test.',
      icon: '/src/statics/logo.png',
      badge: 'images/badge.png'
    };

    event.waitUntil(self.registration.showNotification(title, options));
  })

}
