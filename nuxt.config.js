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
    title: 'dante.wiki',

    //  ~/utils/getSiteMeta.js
    meta: [...meta],

    link: [
      // Favicon.
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico?v=1',
      },
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
    '@/assets/css/fonts.css',
    '@/assets/css/global.css',
    '@/assets/css/markdown.css',
    '@/assets/css/text.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
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
    'nuxt-content-body-html',
    // https://github.com/dword-design/nuxt-content-git
    // Fixes JavaScript timestamps issue.
    [
      'nuxt-content-git',
      {
        createdAtName: 'gitCreatedAt',
        updatedAtName: 'gitUpdatedAt',
      },
    ],
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/feed-module
    '@nuxtjs/feed',
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

  //  ~/utils/getRoutes.js
  sitemap: {
    hostname: process.env.BASE_URL,
    routes() {
      return getRoutes();
    },
  },

  feed: [
    {
      create: async (feed) => {
        const $content = require('@nuxt/content').$content;
        feed.options = {
          title: 'dante.wiki',
          link: 'https://www.dante.wiki/feed.xml',
          description:
            'My personal wikipedia filled with web dev related content, notes and guides.',
        };

        const posts = await $content('posts')
          .sortBy('gitUpdatedAt', 'desc')
          .fetch();
        posts.forEach((post) => {
          const url = `https://www.dante.wiki/posts/${post.slug}`;
          feed.addItem({
            id: url,
            title: post.title,
            description: post.description,
            date: new Date(post.gitUpdatedAt),
            content: post.bodyHtml,
            link: url,
            author: {
              name: 'Dante Mogrim',
              email: '1991.mogrim@gmail.com',
              link: 'https://www.dante.wiki',
            },
          });
        });
      },
      path: '/feed.xml',
      type: 'rss2',
      data: ['posts', 'xml'],
    },
  ],
};
