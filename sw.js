// Barbossa's Bounty offline cache. The version changes whenever the game is rebuilt, which refreshes the cache.
// The page itself is fetched fresh when online (so a new upload shows up at once); models and code come from the cache;
// music is cached the first time each track plays, so the first install stays small.
const CACHE = 'bounty-b076021a6c';
const FILES = [
 "./",
 "./assets/extra.glb",
 "./assets/music/pirate1.mp3",
 "./assets/music/pirate2.mp3",
 "./assets/music/pirate3.mp3",
 "./assets/music/pirate4.mp3",
 "./assets/music/pirate5.mp3",
 "./assets/music/pirate6.mp3",
 "./assets/music/pirate7.mp3",
 "./assets/music/pirate8.mp3",
 "./assets/music/victory.mp3",
 "./assets/q/anne.glb",
 "./assets/q/bird.glb",
 "./assets/q/captain.glb",
 "./assets/q/henry.glb",
 "./assets/q/mako.glb",
 "./assets/q/shark.glb",
 "./assets/q/sharky.glb",
 "./assets/q/skeleton.glb",
 "./assets/q/skeleton2.glb",
 "./assets/q/tentacle.glb",
 "./assets/qprops.glb",
 "./assets/sfx/bookFlip1.mp3",
 "./assets/sfx/click-a.mp3",
 "./assets/sfx/click_001.mp3",
 "./assets/sfx/confirmation_001.mp3",
 "./assets/sfx/doorOpen_1.mp3",
 "./assets/sfx/explosionCrunch_002.mp3",
 "./assets/sfx/footstep00.mp3",
 "./assets/sfx/footstep01.mp3",
 "./assets/sfx/footstep02.mp3",
 "./assets/sfx/footstep03.mp3",
 "./assets/sfx/handleCoins.mp3",
 "./assets/sfx/impactGeneric_light_000.mp3",
 "./assets/sfx/impactPlank_medium_001.mp3",
 "./assets/sfx/impactSoft_medium_000.mp3",
 "./assets/sfx/impactWood_heavy_000.mp3",
 "./assets/sfx/switch-a.mp3",
 "./assets/sword.glb",
 "./assets/tex/brick.jpg",
 "./assets/tex/droplets.png",
 "./assets/tex/gold.jpg",
 "./assets/tex/grass.jpg",
 "./assets/tex/rust.jpg",
 "./assets/tex/sand.jpg",
 "./assets/world.glb",
 "./icons/icon-180.png",
 "./icons/icon-192.png",
 "./icons/icon-512.png",
 "./icons/icon-maskable-512.png",
 "./index.html",
 "./manifest.webmanifest",
 "./vendor/three/build/three.module.min.js",
 "./vendor/three/examples/jsm/libs/meshopt_decoder.module.js",
 "./vendor/three/examples/jsm/loaders/GLTFLoader.js",
 "./vendor/three/examples/jsm/utils/BufferGeometryUtils.js",
 "./vendor/three/examples/jsm/utils/SkeletonUtils.js"
];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => Promise.all(FILES.filter(f => !f.includes('/music/')).map(f => c.add(f).catch(() => { })))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const save = res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; };
  if (req.mode === 'navigate') { e.respondWith(fetch(req).then(save).catch(() => caches.match(req, { ignoreSearch: true }).then(h => h || caches.match('./')))); return; }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(save)));
});
