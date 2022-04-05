import Sass from 'sass';
import Fiber from 'fibers';

export default {
  ssr: false,
  // target: "static",
  htmlAttrs: {
    lang: 'ja',
  },
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'viewport-extra',
        content: 'width=device-width,initial-scale=1,min-width=375',
      },
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
        async: true,
        defer: true,
        body: true,
      },
      { src: 'https://polyfill.io/v3/polyfill.min.js?version=3.52.1' },
      {
        src: 'https://cdn.jsdelivr.net/npm/viewport-extra@2.0.1/dist/iife/viewport-extra.min.js',
        async: true,
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400&family=Roboto:400&family=Quicksand:wght@400;500&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  loading: { color: '#fff' },
  css: ['@/assets/css/reset.css'],
  plugins: [{ src: '@/plugins/common.js', mode: 'client' }],
  components: true,
  buildModules: [
    // '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],
  styleResources: {
    scss: ['@/assets/scss/common.scss', '@/assets/scss/config.scss'],
  },
  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://s-machino.netlify.app/' : 'http://localhost:5555/',
  },
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
  },
};
