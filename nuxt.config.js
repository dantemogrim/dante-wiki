import getRoutes from './utils/getRoutes';
import getSiteMeta from './utils/getSiteMeta';
const meta = getSiteMeta();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en-GB',
    },
    title: 'Dante Mogrim',

    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // Facebook.
      { property: 'og:site_name', content: 'I Love Painting' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://bobross.com',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'My Amazing Blog on The Joy of Painting',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Articles focused on the beautiful art of landscape painting.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/a-lovely-image.png',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: '@bobross' },
      { name: 'twitter:card', content: 'summary_large_image' },
      // Twitter.
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://dante.im',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'My Amazing Blog on The Joy of Painting',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Articles focused on the beautiful art of landscape painting.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/a-loveley-image.png',
      },
    ],

    link: [
      // Favicon.
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.png' },
      {
        // Canonical.
        rel: 'icon',
        type: 'image/x-icon',
        hid: 'canonical',
        rel: 'canonical',
        href: process.env.BASE_URL,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css',
    '@/assets/css/markdown.css',
    '@/assets/css/text.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/main.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-lazy-load',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
    nestedProperties: [
      'author.name',
      'tags.name',
      'tags.posts',
      'posts.title',
      'posts.slug',
    ],
    fullTextSearchFields: ['title', 'description', 'name'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  sitemap: {
    hostname: process.env.BASE_URL,
    routes() {
      return getRoutes();
    },
  },
};
