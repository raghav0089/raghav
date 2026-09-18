importScripts('/raghav/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/raghav/_nuxt/00bb30da5cda72917b73.js",
    "revision": "250b54c592a3d0da2db625d5010acbf6"
  },
  {
    "url": "/raghav/_nuxt/04229f8ba53466b60510.js",
    "revision": "92617cceb0d0db92bea065ffeada3d32"
  },
  {
    "url": "/raghav/_nuxt/0d1b3376100be04c28c7.js",
    "revision": "669d94bae21ebaffca79bc1916676e9e"
  },
  {
    "url": "/raghav/_nuxt/102b705c33c47da1f103.js",
    "revision": "26cf53de22d1eef1e8b401c4ac44f41f"
  },
  {
    "url": "/raghav/_nuxt/14ae300cb7e70c684111.js",
    "revision": "7e83874398ce32d268551b4f071ef294"
  },
  {
    "url": "/raghav/_nuxt/19acfccb9ad0b846618c.js",
    "revision": "f6b42940e5ce2f703e3d4a4efe3efba2"
  },
  {
    "url": "/raghav/_nuxt/3607f74c372ffae9d568.js",
    "revision": "6fe63feb9bca56416808c849df043860"
  },
  {
    "url": "/raghav/_nuxt/393f0dfaea182d4abfc2.js",
    "revision": "d775dd92966943c7e738c2319f3bdc6b"
  },
  {
    "url": "/raghav/_nuxt/3f3fc5df0366d63b754b.js",
    "revision": "7bab0790c883f2a634c511834e23a8a3"
  },
  {
    "url": "/raghav/_nuxt/4064b6e1576fedf06b51.js",
    "revision": "e2ad8c3a7069f2828d53d3796b31bf62"
  },
  {
    "url": "/raghav/_nuxt/49924d37301c7b411d7e.js",
    "revision": "d65f52eb8820a8cb5067ac004bc7e4b6"
  },
  {
    "url": "/raghav/_nuxt/4c1b4bd162e874c1b488.js",
    "revision": "774bb0cf43e2cdc6bcde8bf41ffba9cb"
  },
  {
    "url": "/raghav/_nuxt/503f19f771b201eeb6b3.js",
    "revision": "60723d0bf646a26c293886948f3f2be2"
  },
  {
    "url": "/raghav/_nuxt/56576b3406e42ad0c29f.js",
    "revision": "3cb15796b7b10e80dcdf37bd08d108cd"
  },
  {
    "url": "/raghav/_nuxt/586cb423676d9a60c495.js",
    "revision": "03019c1912a091d493fabf3879374aef"
  },
  {
    "url": "/raghav/_nuxt/728b6fb1b98318eb90a7.js",
    "revision": "46d3982867ba5b6c28d54b061f6b6c24"
  },
  {
    "url": "/raghav/_nuxt/7808f8eea258313c509a.js",
    "revision": "727709a0e6b2c3375f9225ff781134dc"
  },
  {
    "url": "/raghav/_nuxt/79db2cf061b4163bf7ae.js",
    "revision": "3e664fb587215f615b42b97e191d6b34"
  },
  {
    "url": "/raghav/_nuxt/830b17c254936803fa4a.js",
    "revision": "73559b23974873dadc64386de0e5c9d6"
  },
  {
    "url": "/raghav/_nuxt/8b9e1f6e250a5fd34f75.js",
    "revision": "7a1b8d7dcff498edf13cc126d67433a3"
  },
  {
    "url": "/raghav/_nuxt/8dc14329fd500819e44b.js",
    "revision": "184e489c38dfea959d128ae3c463ebdf"
  },
  {
    "url": "/raghav/_nuxt/9071994101507674388e.js",
    "revision": "fe9f5536b268b7b552cb4e85bc83c773"
  },
  {
    "url": "/raghav/_nuxt/98540bbab6a6ba3205f2.js",
    "revision": "fb322f24fa3b59d565ce2d985a91cfaf"
  },
  {
    "url": "/raghav/_nuxt/b1f16f5a8bb9eeac45af.js",
    "revision": "a313c05147d2af88788fcaf8e61d7058"
  },
  {
    "url": "/raghav/_nuxt/cf4a0f47e486dc049a45.js",
    "revision": "1618102ede63e43039ceb845855e597a"
  },
  {
    "url": "/raghav/_nuxt/d979af2868592f57eb18.js",
    "revision": "39d5073155b5b75bc6178c1cbf73d211"
  },
  {
    "url": "/raghav/_nuxt/db3ae33f8aa32b2b821f.js",
    "revision": "f194616b42ca8973859e852b7cb96e43"
  },
  {
    "url": "/raghav/_nuxt/e5a17d1f65be197376aa.js",
    "revision": "be0e1b3a90ea52c81fba7e2fb06c2c24"
  },
  {
    "url": "/raghav/_nuxt/e7297eae796ec8965e08.js",
    "revision": "64fb20609ca85accfedd482ddf3f5c10"
  },
  {
    "url": "/raghav/_nuxt/eae8b3896a5be068c171.js",
    "revision": "454b667789d8f9860d004663cc73d309"
  },
  {
    "url": "/raghav/_nuxt/ef4173d5224bf8be6db7.js",
    "revision": "12aca51fc8ec3cf3383e81b6672e1d83"
  }
], {
  "cacheId": "raghavaggarwal.com",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/raghav/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/raghav/.*'), workbox.strategies.networkFirst({}), 'GET')
