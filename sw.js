importScripts('/raghav/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/raghav/_nuxt/02f51fcdef74788a7c15.js",
    "revision": "fc8ae1d71e1360bb3ce4b60348f25185"
  },
  {
    "url": "/raghav/_nuxt/09749f184b9dcb7e6be3.js",
    "revision": "795046aa23177544620b21cd1ce325cd"
  },
  {
    "url": "/raghav/_nuxt/0bfb0f826ca665988cdb.js",
    "revision": "91367dfbb695495ae5a5c269171d1a3a"
  },
  {
    "url": "/raghav/_nuxt/11262d0768acdf46a604.js",
    "revision": "71fe72fb020978ca212fa12a7a08529d"
  },
  {
    "url": "/raghav/_nuxt/2c70a070b64dd696c50d.js",
    "revision": "dfe1b5024ba2ac9711fd794f1296ee9e"
  },
  {
    "url": "/raghav/_nuxt/36233b46ddac208f1dfb.js",
    "revision": "6fab2c80513803d60581d43f952f75aa"
  },
  {
    "url": "/raghav/_nuxt/4244b875c3506355159a.js",
    "revision": "f5205dd3e3519834cd0be394139742e8"
  },
  {
    "url": "/raghav/_nuxt/4e0a799664a5d7239957.js",
    "revision": "b2d058ac93b7f0ae6ad91a6962e14186"
  },
  {
    "url": "/raghav/_nuxt/6866b104320e804fdf2d.js",
    "revision": "e9b7837529a477a087efc26a4505f501"
  },
  {
    "url": "/raghav/_nuxt/7af7f1333484fc79bb37.js",
    "revision": "5fd6cb5d63a3ddf2642a268eb9220acf"
  },
  {
    "url": "/raghav/_nuxt/7eda601bdf40171de3c1.js",
    "revision": "679e566e81cdeca0d270396c6fddb833"
  },
  {
    "url": "/raghav/_nuxt/840b0f71a84e8422a049.js",
    "revision": "b29e5c8804de0c8f0bd700b7ba8b0050"
  },
  {
    "url": "/raghav/_nuxt/84e2c2e75ff42768bb88.js",
    "revision": "456dac390518b64a16ae48e346c7d31b"
  },
  {
    "url": "/raghav/_nuxt/913ad435c9e7fca5d4c1.js",
    "revision": "2db942727da35943063aee72eb0679bd"
  },
  {
    "url": "/raghav/_nuxt/92773ef602caa4e99642.js",
    "revision": "706238dd7d55df30f109b9c1a9d77c1e"
  },
  {
    "url": "/raghav/_nuxt/a84330d1cd26b5767a2b.js",
    "revision": "092f966ade9e4efcb2bec3d948cafe55"
  },
  {
    "url": "/raghav/_nuxt/ac0272fc17544cd3f769.js",
    "revision": "f2ba3519eb1d68422a28b4e93a5ee3b7"
  },
  {
    "url": "/raghav/_nuxt/b2ab14af8bbf05aaffe4.js",
    "revision": "150724af19f2e006a821787c2cbd85d7"
  },
  {
    "url": "/raghav/_nuxt/b79f056c88c325f8c065.js",
    "revision": "56c177699c4e65d6fae1e20808a5fc3e"
  },
  {
    "url": "/raghav/_nuxt/b9f542927739e93f34e9.js",
    "revision": "c05edff5f0b3d0a7a433f74e89faeaf7"
  },
  {
    "url": "/raghav/_nuxt/be324ac641d8f0f91e71.js",
    "revision": "dd7d44f76c222240430ef06424d95c95"
  },
  {
    "url": "/raghav/_nuxt/d2b38dc9216469ee6805.js",
    "revision": "cc477eb56ead5d81b0734bbb45e9d9a7"
  },
  {
    "url": "/raghav/_nuxt/dd0103b26e195067d634.js",
    "revision": "4b88284e18f71d3eb583f9594ba73222"
  },
  {
    "url": "/raghav/_nuxt/dd8d4a329e425011abd1.js",
    "revision": "c106fc2547c825b7c2a7a9af3a0b9d67"
  },
  {
    "url": "/raghav/_nuxt/f246cc51ffcdd54ddc7f.js",
    "revision": "cf8585da9e35cd8978c05576fdc80ec1"
  },
  {
    "url": "/raghav/_nuxt/f2e1244676a74b4051cd.js",
    "revision": "0a3f785473ee012189d6d89693f5cdb2"
  },
  {
    "url": "/raghav/_nuxt/f93bfee26b757f6de624.js",
    "revision": "fec8f1e54e95ddb283a5c2bbffc99cf0"
  },
  {
    "url": "/raghav/_nuxt/f9d5a61589bbf5463e2d.js",
    "revision": "3c313bad52d5c76337cbf76906606558"
  },
  {
    "url": "/raghav/_nuxt/fdc6830ea6f4f743a07e.js",
    "revision": "c4a1e1159135432d7d7f8abaff971809"
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
