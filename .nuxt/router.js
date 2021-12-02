import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6fd94cc0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6bc754ae = () => interopDefault(import('../pages/case01.vue' /* webpackChunkName: "pages/case01" */))
const _6bd56c2f = () => interopDefault(import('../pages/case02.vue' /* webpackChunkName: "pages/case02" */))
const _6be383b0 = () => interopDefault(import('../pages/case03.vue' /* webpackChunkName: "pages/case03" */))
const _6bf19b31 = () => interopDefault(import('../pages/case04.vue' /* webpackChunkName: "pages/case04" */))
const _6bffb2b2 = () => interopDefault(import('../pages/case05.vue' /* webpackChunkName: "pages/case05" */))
const _6c0dca33 = () => interopDefault(import('../pages/case06.vue' /* webpackChunkName: "pages/case06" */))
const _6c1be1b4 = () => interopDefault(import('../pages/case07.vue' /* webpackChunkName: "pages/case07" */))
const _6c29f935 = () => interopDefault(import('../pages/case08.vue' /* webpackChunkName: "pages/case08" */))
const _6c3810b6 = () => interopDefault(import('../pages/case09.vue' /* webpackChunkName: "pages/case09" */))
const _6d6e15cc = () => interopDefault(import('../pages/case10.vue' /* webpackChunkName: "pages/case10" */))
const _132045f3 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _ded69fb6 = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _59f84f15 = () => interopDefault(import('../pages/works.vue' /* webpackChunkName: "pages/works" */))
const _30699736 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6fd94cc0,
    name: "about"
  }, {
    path: "/case01",
    component: _6bc754ae,
    name: "case01"
  }, {
    path: "/case02",
    component: _6bd56c2f,
    name: "case02"
  }, {
    path: "/case03",
    component: _6be383b0,
    name: "case03"
  }, {
    path: "/case04",
    component: _6bf19b31,
    name: "case04"
  }, {
    path: "/case05",
    component: _6bffb2b2,
    name: "case05"
  }, {
    path: "/case06",
    component: _6c0dca33,
    name: "case06"
  }, {
    path: "/case07",
    component: _6c1be1b4,
    name: "case07"
  }, {
    path: "/case08",
    component: _6c29f935,
    name: "case08"
  }, {
    path: "/case09",
    component: _6c3810b6,
    name: "case09"
  }, {
    path: "/case10",
    component: _6d6e15cc,
    name: "case10"
  }, {
    path: "/contact",
    component: _132045f3,
    name: "contact"
  }, {
    path: "/gallery",
    component: _ded69fb6,
    name: "gallery"
  }, {
    path: "/works",
    component: _59f84f15,
    name: "works"
  }, {
    path: "/",
    component: _30699736,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
