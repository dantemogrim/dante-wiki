import getRoutes from './utils/getRoutes';
import getSiteMeta from './utils/getSiteMeta';

const meta = getSiteMeta();

const constructFeedItem = (post, dir, hostname) => {
  const url = `${hostname}/${dir}/${post.slug}`;
  return {
    title: post.title,
    id: url,
    link: url,
    description: post.description,
    content: post.bodyPlainText,
  };
};

const create = async (feed, args) => {
  const [filePath, ext] = args;
  const hostname =
    process.NODE_ENV === 'production'
      ? 'https://dante.wiki'
      : 'http://localhost:3000';
  feed.options = {
    title: 'My Blog',
    description: 'Blog Stuff!',
    link: `${hostname}/feed.${ext}`,
  };
  const { $content } = require('@nuxt/content');
  if (posts === null || posts.length === 0)
    posts = await $content(filePath).fetch();

  for (const post of posts) {
    const feedItem = await constructFeedItem(post, filePath, hostname);
    feed.addItem(feedItem);
  }
  return feed;
};

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
  plugins: [],

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
      path: '/feed.xml', // The route to your feed.
      create(feed) {},
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
      data: ['Some additional data'], // Will be passed as 2nd argument to `create` function
    },
  ],

  // Case insensitive sorting on posts.
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.bodyPlainText = document.text;
        Object.entries(document).forEach(([key, value]) => {
          const _key = `case_insensitive__${key}`; // prefix is arbitrary

          if (!document[_key] && typeof value === 'string') {
            document[_key] = value.toLocaleLowerCase();
          }
        });
      }
    },
  },
};
