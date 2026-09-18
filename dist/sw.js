importScripts('/raghav/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/raghav/_nuxt/00645b4c52fd02f51433.js",
    "revision": "1c273625ade20e7787eb3a1a7720eb4f"
  },
  {
    "url": "/raghav/_nuxt/093f6665149ace00a575.js",
    "revision": "a2cc3c55744275d177ae9dd6670da163"
  },
  {
    "url": "/raghav/_nuxt/126aab6c07b3a1f13cdf.js",
    "revision": "5e8a12e16a4e7ff0cbe6b99acbe371bf"
  },
  {
    "url": "/raghav/_nuxt/14a332dd06d9b11d3a5a.js",
    "revision": "ae61d702ca1a669d9fd18c737081dbb8"
  },
  {
    "url": "/raghav/_nuxt/17f166b8ef4b9ca632a9.js",
    "revision": "85ea022613538c395fa333f61e5cb4e3"
  },
  {
    "url": "/raghav/_nuxt/18723b096ecf3f8d23a7.js",
    "revision": "663a2a5667475a4475c90b83a2891074"
  },
  {
    "url": "/raghav/_nuxt/19bc27e6871f8c44d0a7.js",
    "revision": "bf0032a15c573b2f00adff3159d995b4"
  },
  {
    "url": "/raghav/_nuxt/1ca2351dab43ec48aa09.js",
    "revision": "1d5bb1173f190fbf8454ac9858de9df2"
  },
  {
    "url": "/raghav/_nuxt/362848f5626a30239a6b.js",
    "revision": "7631f3041c54509d4c260714e2b4a9f4"
  },
  {
    "url": "/raghav/_nuxt/385a31fbc18aae743621.js",
    "revision": "48299dc08357b6e6683bf4caad430781"
  },
  {
    "url": "/raghav/_nuxt/52efc2ffe46724793d1a.js",
    "revision": "10bd4c7eb317316bb180a05d47fd6060"
  },
  {
    "url": "/raghav/_nuxt/54747ccdfa9f8aef2699.js",
    "revision": "eefa81799afbdd2df9ab83d984805e35"
  },
  {
    "url": "/raghav/_nuxt/62d3c758215e400140ca.js",
    "revision": "a0b5b4de52bde0431e74a9a5bae53036"
  },
  {
    "url": "/raghav/_nuxt/7b5406bab4d8ee555780.js",
    "revision": "dbf2e69688d28b83c048603c178b8977"
  },
  {
    "url": "/raghav/_nuxt/85474113da4ad4d53fcb.js",
    "revision": "f4b736e121419a13b14594144686d0dd"
  },
  {
    "url": "/raghav/_nuxt/b1f51cfb5a5ec7de4bc3.js",
    "revision": "37f0ef27116461e6b8d31551020095a2"
  },
  {
    "url": "/raghav/_nuxt/bf99576f7dcfd514838e.js",
    "revision": "a82f34826cc3ee1fc2a114edbc1d802a"
  },
  {
    "url": "/raghav/_nuxt/c9b877c0a90523081d04.js",
    "revision": "b09c65365d5fc8d6d8b6f69683d85bc0"
  },
  {
    "url": "/raghav/_nuxt/cd17858d1330c60ccbc9.js",
    "revision": "f76de0b38bf0b0ecb54523e6035ba919"
  },
  {
    "url": "/raghav/_nuxt/ce2af4d2bd7bccd09f21.js",
    "revision": "5fc51af220b2fcc1c82a40a979cdb6c7"
  },
  {
    "url": "/raghav/_nuxt/d342a535c375c29dc855.js",
    "revision": "35c52145ef96d407535187739db3ed90"
  },
  {
    "url": "/raghav/_nuxt/de51884754b8acf2bece.js",
    "revision": "3fa9685ecbe4ecc240ad38731631f62b"
  },
  {
    "url": "/raghav/_nuxt/e124a7ab9f9f91a078e1.js",
    "revision": "adaa405fdaf0d6b1d030744bcc40e24b"
  },
  {
    "url": "/raghav/_nuxt/ebd54928d2fb98abd7e2.js",
    "revision": "3b2d928ee237615e85dea807de5df24f"
  },
  {
    "url": "/raghav/_nuxt/ee1ed1c4ad854bf5db28.js",
    "revision": "298103b18d61c77de403ea0d7b121262"
  },
  {
    "url": "/raghav/_nuxt/f246cc51ffcdd54ddc7f.js",
    "revision": "cf8585da9e35cd8978c05576fdc80ec1"
  },
  {
    "url": "/raghav/_nuxt/f3acb073900d7c42830c.js",
    "revision": "fc56010b2766d84dd3776342b81c89d3"
  },
  {
    "url": "/raghav/_nuxt/f532c3050331e2f1cd54.js",
    "revision": "a234abbb1e186c896c3b6b36a83d89da"
  },
  {
    "url": "/raghav/_nuxt/fa12b21d0a84c82d82c1.js",
    "revision": "ad1d53e8afb9eff4ef331d103e1f20c0"
  },
  {
    "url": "/raghav/_nuxt/fe3cce6dd55104f079ad.js",
    "revision": "9442cbeac689f39106099b0528b81b3e"
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
