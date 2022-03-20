import getRoutes from './utils/getRoutes';
import getSiteMeta from './utils/getSiteMeta';

const meta = getSiteMeta();

export default {
  target: 'static',

  head: {
    htmlAttrs: {
      lang: 'en-GB',
    },
    title: 'dante.wiki',

    meta: [...meta],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico?v=1',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        hid: 'canonical',
        rel: 'canonical',
        href: process.env.BASE_URL,
      },
    ],
  },

  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/global.css',
    '@/assets/css/markdown.css',
    '@/assets/css/text.css',
  ],

  loadingIndicator: {
    name: 'pulse',
    continuous: true,
    color: 'hotpink',
    background: 'none',
  },

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-analytics'],

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    // debug: {
    //   enabled: true,
    //   sendHitTask: true,
    // },
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
      // debug: {
      //   enabled: true,
      //   sendHitTask: true,
      // },
    },
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-lazy-load',
    'nuxt-content-body-html',
    // Fixes JavaScript timestamps issue.
    [
      'nuxt-content-git',
      {
        createdAtName: 'gitCreatedAt',
        updatedAtName: 'gitUpdatedAt',
      },
    ],
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/feed',
  ],

  axios: {},

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

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

  build: {},

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
