// Site moved to https://bpnihongohub.github.io/ : remove old cache and this worker.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.map(k=>caches.delete(k)))).then(()=>self.registration.unregister()).then(()=>self.clients.matchAll()).then(cs=>cs.forEach(c=>c.navigate('https://bpnihongohub.github.io/'+(new URL(c.url).hash)))))});
