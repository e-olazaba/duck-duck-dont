if (workbox) {
  // The precacheAndRoute() method will add entries to the precache
  // list and add a route to respond to fetch events.

  // The self.__precacheManifest variable lists the names of the files 
  // that were processed by webpack and that end up in your dist folder
  // including the workbox service worker library
  workbox.precaching.precacheAndRoute(self.__precacheManifest);

  // registerNavigationRoute returns a specific response for all navigation requests.
  // Setting this to index.html since our app is a SPA
  workbox.routing.registerNavigationRoute('/index.html');

  // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  );

  // Cache the underlying font files with a cache-first strategy for 1 year.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        })
      ]
    })
  );

  // Use a cache-first strategy for images, by matching against a list of known extensions
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        })
      ]
    })
  );

  // Use a stale-while-revalidate strategy for CSS and js files that aren't precached
  workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    })
  );
}
