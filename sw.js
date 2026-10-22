const CACHE_NAME = 'maldives-guide-2026-10-22-v5';
const CORE_ASSETS = ["./index.html", "./manifest.webmanifest", "./Maldives_2026_Offline.html", "./assets/ai_drone.webp", "./assets/ai_glass.webp", "./assets/ai_kite_beach.webp", "./assets/ai_kite_water.webp", "./assets/ai_parasail.webp", "./assets/ai_photo.webp", "./assets/ai_video.webp", "./assets/ai_windsurf.webp", "./assets/apple-touch-icon.png", "./assets/food-icon-beer.svg", "./assets/food-icon-bread.svg", "./assets/food-icon-burger.svg", "./assets/food-icon-cake.svg", "./assets/food-icon-cocktail.svg", "./assets/food-icon-coffee.svg", "./assets/food-icon-curry.svg", "./assets/food-icon-dessert.svg", "./assets/food-icon-fish.svg", "./assets/food-icon-icecream.svg", "./assets/food-icon-meat.svg", "./assets/food-icon-noodle.svg", "./assets/food-icon-other.svg", "./assets/food-icon-pizza.svg", "./assets/food-icon-rice.svg", "./assets/food-icon-salad.svg", "./assets/food-icon-sandwich.svg", "./assets/food-icon-seafood.svg", "./assets/food-icon-softdrink.svg", "./assets/food-icon-soup.svg", "./assets/food-icon-sushi.svg", "./assets/food-icon-tea.svg", "./assets/food-icon-veggie.svg", "./assets/food-icon-wine.svg", "./assets/icon-192.png", "./assets/icon-512.png", "./assets/w_boat.webp", "./assets/w_diving.webp", "./assets/w_fishing.svg", "./assets/w_food.webp", "./assets/w_gaathafushi.svg", "./assets/w_island.webp", "./assets/w_jet.webp", "./assets/w_marine.webp", "./assets/w_night.svg", "./assets/w_photography.webp", "./assets/w_private_dining.webp", "./assets/w_sail.webp", "./assets/w_shark.webp", "./assets/w_snorkel.webp", "./assets/w_spa.webp", "./assets/w_spa2.webp", "./assets/w_sport.webp", "./assets/w_sunset.svg", "./assets/ym-spa-menu-1.webp", "./assets/ym-spa-menu-2.webp", "./assets/ym-spa-menu-3.webp", "./assets/ym-spa-menu-4.webp", "./assets/ym_bike.svg", "./assets/ym_coral.webp", "./assets/ym_dolphin.webp", "./assets/ym_fish.webp", "./assets/ym_fly.webp", "./assets/ym_food.webp", "./assets/ym_honeymoon.svg", "./assets/ym_jet.webp", "./assets/ym_kayak.webp", "./assets/ym_manta.webp", "./assets/ym_para.webp", "./assets/ym_resort.svg", "./assets/ym_sail.webp", "./assets/ym_scuba.webp", "./assets/ym_scuba2.webp", "./assets/ym_seabob.webp", "./assets/ym_spa_illustration.svg", "./assets/ym_turtle.webp", "./assets/ym_wake.webp", "./assets/ym_water.webp"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('maldives-guide-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => { const copy=response.clone(); caches.open(CACHE_NAME).then(cache=>cache.put('./index.html',copy)); return response; }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response && response.ok) { const copy=response.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(request,copy)); }
    return response;
  })));
});
