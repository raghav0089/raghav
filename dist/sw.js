importScripts('/raghav/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/raghav/_nuxt/00bb30da5cda72917b73.js",
    "revision": "250b54c592a3d0da2db625d5010acbf6"
  },
  {
    "url": "/raghav/_nuxt/04a0da475f02bbc26c9b.js",
    "revision": "19c94dfe971beacd9527371708f747e9"
  },
  {
    "url": "/raghav/_nuxt/0c4ad3c8d879aaadb1ca.js",
    "revision": "a38052ac7d3504e10a408d24928366d9"
  },
  {
    "url": "/raghav/_nuxt/102b705c33c47da1f103.js",
    "revision": "26cf53de22d1eef1e8b401c4ac44f41f"
  },
  {
    "url": "/raghav/_nuxt/1696fcfdd1d179e9fe5c.js",
    "revision": "cc15557e0b3b8b3b68144f0f39650f3e"
  },
  {
    "url": "/raghav/_nuxt/246a00afd01e5e1f841d.js",
    "revision": "1e1735ffad1b7dd7dbeccbfbf6b2e3ed"
  },
  {
    "url": "/raghav/_nuxt/30c3cee3437b819f155e.js",
    "revision": "07d1fe80c80a657b9ede25b3b5c3a2d4"
  },
  {
    "url": "/raghav/_nuxt/3978dadcda6be9e5c393.js",
    "revision": "a4c759cd9f1c7dd0e6985eb80619b5ac"
  },
  {
    "url": "/raghav/_nuxt/49924d37301c7b411d7e.js",
    "revision": "d65f52eb8820a8cb5067ac004bc7e4b6"
  },
  {
    "url": "/raghav/_nuxt/52a60b11a3426bc9e982.js",
    "revision": "a3359e89c9babe3978e46aff51e620db"
  },
  {
    "url": "/raghav/_nuxt/5e723052741b0f828af1.js",
    "revision": "1f62d76d1d2133e11589851b3415a314"
  },
  {
    "url": "/raghav/_nuxt/638fc78685bbb0e11bc1.js",
    "revision": "9e8e1b477ea5449c7228286f14690db1"
  },
  {
    "url": "/raghav/_nuxt/670dabe123ed865c60fb.js",
    "revision": "ef5fa34dd0a033b9c7dc80b40d1abf3d"
  },
  {
    "url": "/raghav/_nuxt/80638d72fe7818efca1a.js",
    "revision": "a739127db8aaac543c74642f413bf0b3"
  },
  {
    "url": "/raghav/_nuxt/8073b5235eecd75af36b.js",
    "revision": "22fed9064a31c89e85b07b375066ffe4"
  },
  {
    "url": "/raghav/_nuxt/9071994101507674388e.js",
    "revision": "fe9f5536b268b7b552cb4e85bc83c773"
  },
  {
    "url": "/raghav/_nuxt/9576a26b50b72b80c33a.js",
    "revision": "25057f4e63890cc0b62bcf1120b6089d"
  },
  {
    "url": "/raghav/_nuxt/97157ab2da8460af1186.js",
    "revision": "db13aa8f19c9fd82536af91105971e8f"
  },
  {
    "url": "/raghav/_nuxt/9b3e554a7beef2e1a468.js",
    "revision": "df0816230057d778f5cbda83c2667792"
  },
  {
    "url": "/raghav/_nuxt/9cca39afca432b2fab85.js",
    "revision": "b97c690a67d0acd87df962553c2fa182"
  },
  {
    "url": "/raghav/_nuxt/a1857a0956936ffdb093.js",
    "revision": "4e40a5b3577972eaaa1a56148605b1a8"
  },
  {
    "url": "/raghav/_nuxt/ac47ec58cb71c24ec9b6.js",
    "revision": "5eef37c88fabb2e105c6640a2c6ef79c"
  },
  {
    "url": "/raghav/_nuxt/af3e52f69cfc43369d37.js",
    "revision": "6a2fe28b2f41c84993888bbdcb97ba44"
  },
  {
    "url": "/raghav/_nuxt/bd6a770a2e8c33d474d2.js",
    "revision": "0bb48f9fba435f5f0cd10f2c82ce7ceb"
  },
  {
    "url": "/raghav/_nuxt/c5736a962d8a04201966.js",
    "revision": "93eb76017411b068d14425a553437c34"
  },
  {
    "url": "/raghav/_nuxt/ce5215a77bb906267c89.js",
    "revision": "f9f6e4ba034afce11f46d0b0d07875e8"
  },
  {
    "url": "/raghav/_nuxt/d979af2868592f57eb18.js",
    "revision": "39d5073155b5b75bc6178c1cbf73d211"
  },
  {
    "url": "/raghav/_nuxt/e44a52e13b774cc11c32.js",
    "revision": "86844d93a079307c1ea367b6b5cf9e85"
  },
  {
    "url": "/raghav/_nuxt/eae8b3896a5be068c171.js",
    "revision": "454b667789d8f9860d004663cc73d309"
  },
  {
    "url": "/raghav/_nuxt/edb581a964d6264abf77.js",
    "revision": "fedee9399f2f7a0973f17d101bae7c9b"
  },
  {
    "url": "/raghav/_nuxt/f81ccdc387b912907dca.js",
    "revision": "be2cc3353929b278ae3c50ada4f5b9a9"
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
