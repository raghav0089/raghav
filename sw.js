importScripts('/raghav/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/raghav/_nuxt/00bb30da5cda72917b73.js",
    "revision": "250b54c592a3d0da2db625d5010acbf6"
  },
  {
    "url": "/raghav/_nuxt/0a9d3827f3553f3e8f2e.js",
    "revision": "65b211d5bb5bd619cd06078270e6d86f"
  },
  {
    "url": "/raghav/_nuxt/102b705c33c47da1f103.js",
    "revision": "26cf53de22d1eef1e8b401c4ac44f41f"
  },
  {
    "url": "/raghav/_nuxt/16492c65477a1b220f06.js",
    "revision": "f92ef125c8f985d747d86724b47fbfb0"
  },
  {
    "url": "/raghav/_nuxt/1664363ecf91f05f70b1.js",
    "revision": "368213541cee94c048d0eb83a523209c"
  },
  {
    "url": "/raghav/_nuxt/214f445261f4d3ffd243.js",
    "revision": "812614489f9b2d35f30ff8a4132db6a1"
  },
  {
    "url": "/raghav/_nuxt/28342575ba6a4db8b176.js",
    "revision": "e5843599e6987313a7e2152ada282cd8"
  },
  {
    "url": "/raghav/_nuxt/3eab0153bd6f66f90709.js",
    "revision": "04227fc73d9660f985409cd4b0357c02"
  },
  {
    "url": "/raghav/_nuxt/49924d37301c7b411d7e.js",
    "revision": "d65f52eb8820a8cb5067ac004bc7e4b6"
  },
  {
    "url": "/raghav/_nuxt/512d75a122446df3765c.js",
    "revision": "2b67c2abf21ade5fa43274709bde20eb"
  },
  {
    "url": "/raghav/_nuxt/57650accc36e275f2439.js",
    "revision": "1213d8d023e9a78022a7d4ad204e96b9"
  },
  {
    "url": "/raghav/_nuxt/6b5657dec97dcae284e3.js",
    "revision": "ae27825fcdeeaa8fd24ecdbf034a968d"
  },
  {
    "url": "/raghav/_nuxt/71aed691421920cb8112.js",
    "revision": "93ef69c36f2c52396c1b0734b1f34217"
  },
  {
    "url": "/raghav/_nuxt/828ada1a79ffd3afe8f0.js",
    "revision": "97dc7972115a7a9873811f8731d6a2b1"
  },
  {
    "url": "/raghav/_nuxt/8711f0d94e399a50c426.js",
    "revision": "c3f50489361f70313770d4b5d32654c9"
  },
  {
    "url": "/raghav/_nuxt/9071994101507674388e.js",
    "revision": "fe9f5536b268b7b552cb4e85bc83c773"
  },
  {
    "url": "/raghav/_nuxt/90b77ba9eada7c739908.js",
    "revision": "e643cc75a860b0f7243d42bffcef5754"
  },
  {
    "url": "/raghav/_nuxt/93140f82c80736219ee2.js",
    "revision": "3c50835dde7a9e3846bb874d16dae397"
  },
  {
    "url": "/raghav/_nuxt/94407a5a7531d786f7ff.js",
    "revision": "6b0eb3f489950eb35a228f2b03302000"
  },
  {
    "url": "/raghav/_nuxt/97b826c2157289454ddb.js",
    "revision": "e83c7dc904692cd6dbc99dc8c4b856b0"
  },
  {
    "url": "/raghav/_nuxt/9df3ea60a50dd5552f06.js",
    "revision": "0cb5935cd46ff587223befd71948fb0b"
  },
  {
    "url": "/raghav/_nuxt/bcf571f889c6c24e75f3.js",
    "revision": "55f8d373d1c99679e4ba6fb75d50685c"
  },
  {
    "url": "/raghav/_nuxt/bdb3da5af0247d4e9791.js",
    "revision": "aa83a422a4a061ecd6a34b52bb4b24cf"
  },
  {
    "url": "/raghav/_nuxt/c1beda9b8cce83ea025f.js",
    "revision": "4b0c3022c70f6fdf9d834587d45a728f"
  },
  {
    "url": "/raghav/_nuxt/c4ec39df996cfcbd1538.js",
    "revision": "b7f95fd3837f8b4981ca52a9cc721734"
  },
  {
    "url": "/raghav/_nuxt/d979af2868592f57eb18.js",
    "revision": "39d5073155b5b75bc6178c1cbf73d211"
  },
  {
    "url": "/raghav/_nuxt/dcfcdf67286d68da3863.js",
    "revision": "388570c78afe5ab8434bd61f20f82917"
  },
  {
    "url": "/raghav/_nuxt/df5e110bbf17d1c90955.js",
    "revision": "581253ae2f3d53be4ee5524f5263e039"
  },
  {
    "url": "/raghav/_nuxt/e1cf72048c4aa239efc4.js",
    "revision": "165aae9b71406ac13c5ec71186f309b8"
  },
  {
    "url": "/raghav/_nuxt/eae8b3896a5be068c171.js",
    "revision": "454b667789d8f9860d004663cc73d309"
  },
  {
    "url": "/raghav/_nuxt/fef7cb0b6916719f8fb1.js",
    "revision": "f62e41379ef47ddcf718aa578a25e197"
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
