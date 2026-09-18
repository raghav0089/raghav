import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0877531e = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _c46b91d8 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _ac5eac58 = () => interopDefault(import('../pages/opensource.vue' /* webpackChunkName: "pages/opensource" */))
const _462eae6c = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _d6a50084 = () => interopDefault(import('../pages/projects/automizeapps.vue' /* webpackChunkName: "pages/projects/automizeapps" */))
const _763dbc4a = () => interopDefault(import('../pages/projects/Blockchain.vue' /* webpackChunkName: "pages/projects/Blockchain" */))
const _289c506d = () => interopDefault(import('../pages/projects/divineheal.vue' /* webpackChunkName: "pages/projects/divineheal" */))
const _04e3e888 = () => interopDefault(import('../pages/projects/goals101.vue' /* webpackChunkName: "pages/projects/goals101" */))
const _019958cc = () => interopDefault(import('../pages/projects/GoCorona.vue' /* webpackChunkName: "pages/projects/GoCorona" */))
const _a507a8e0 = () => interopDefault(import('../pages/projects/layerpath.vue' /* webpackChunkName: "pages/projects/layerpath" */))
const _7f92d412 = () => interopDefault(import('../pages/projects/playcode.vue' /* webpackChunkName: "pages/projects/playcode" */))
const _2d257786 = () => interopDefault(import('../pages/projects/playlife.vue' /* webpackChunkName: "pages/projects/playlife" */))
const _7b5454a7 = () => interopDefault(import('../pages/projects/SocialContour.vue' /* webpackChunkName: "pages/projects/SocialContour" */))
const _5cf8a960 = () => interopDefault(import('../pages/projects/streerides.vue' /* webpackChunkName: "pages/projects/streerides" */))
const _ad1127d0 = () => interopDefault(import('../pages/projects/TravelGo.vue' /* webpackChunkName: "pages/projects/TravelGo" */))
const _d0e41fc8 = () => interopDefault(import('../pages/projects/trulyabled.vue' /* webpackChunkName: "pages/projects/trulyabled" */))
const _120db533 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/raghav/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0877531e,
    name: "about___en"
  }, {
    path: "/blog",
    component: _c46b91d8,
    name: "blog___en"
  }, {
    path: "/opensource",
    component: _ac5eac58,
    name: "opensource___en"
  }, {
    path: "/projects",
    component: _462eae6c,
    name: "projects___en"
  }, {
    path: "/projects/automizeapps",
    component: _d6a50084,
    name: "projects-automizeapps___en"
  }, {
    path: "/projects/Blockchain",
    component: _763dbc4a,
    name: "projects-Blockchain___en"
  }, {
    path: "/projects/divineheal",
    component: _289c506d,
    name: "projects-divineheal___en"
  }, {
    path: "/projects/goals101",
    component: _04e3e888,
    name: "projects-goals101___en"
  }, {
    path: "/projects/GoCorona",
    component: _019958cc,
    name: "projects-GoCorona___en"
  }, {
    path: "/projects/layerpath",
    component: _a507a8e0,
    name: "projects-layerpath___en"
  }, {
    path: "/projects/playcode",
    component: _7f92d412,
    name: "projects-playcode___en"
  }, {
    path: "/projects/playlife",
    component: _2d257786,
    name: "projects-playlife___en"
  }, {
    path: "/projects/SocialContour",
    component: _7b5454a7,
    name: "projects-SocialContour___en"
  }, {
    path: "/projects/streerides",
    component: _5cf8a960,
    name: "projects-streerides___en"
  }, {
    path: "/projects/TravelGo",
    component: _ad1127d0,
    name: "projects-TravelGo___en"
  }, {
    path: "/projects/trulyabled",
    component: _d0e41fc8,
    name: "projects-trulyabled___en"
  }, {
    path: "/",
    component: _120db533,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
