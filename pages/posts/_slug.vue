<template>
  <div class="md:mx-20 font-jetbrains-mono">
    <article class="flex flex-col p-4 m-2 rounded-md shadow-lg bg-gray-50">
      <gif :gif="post.gif" />
      <h1 class="text-5xl text-indigo-900 font-cartridge">
        {{ post.title }}
      </h1>
      <p class="mt-2 mb-2">{{ post.description }}</p>
      <div class="flex items-center text-center">
        <span> Tags: </span>
        <span v-for="tag in post.tags" :key="tag">
          <div class="flex text-center">
            <nuxt-link
              :to="`/tags/${tag}`"
              class="p-1 m-2 bg-green-200 rounded-md"
              >#{{ tag }}
            </nuxt-link>
          </div>
        </span>
      </div>
      <author :author="post.author" />
      <div class="p-3 mb-2 rounded-md bg-indigo-50 sm:w-full md:w-2/6">
        <p>🌱 Created: {{ formatDate(post.gitCreatedAt) }}</p>
        <p>✏️ Updated: {{ formatDate(post.gitUpdatedAt) }}</p>
      </div>
      <hr />
      <!-- TOC - Table of Contents -->
      <nav class="p-3 bg-blue-100 rounded-md sm:w-full md:w-2/6">
        <p>📚 Contents:</p>
        <ul>
          <li v-for="link of post.toc" :key="link.id">
            <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <nuxt-content :document="post" />
    </article>
    <previous-next-post :previous="previous" :next="next"
      >Post</previous-next-post
    >
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta';

export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch();

    const [previous, next] = await $content('posts')
      .only(['title', 'slug'])
      .sortBy('gitCreatedAt', 'asc')
      .surround(params.slug)
      .fetch();

    return {
      post,
      previous,
      next,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-GB', options);
    },
  },

  computed: {
    meta() {
      const metaData = {
        type: 'post',
        title: `${this.post.title} | Dante Mogrim`,
        description: this.post.description,
        url: `${this.$config.baseUrl}/posts/${this.$route.params.slug}`,
      };
      return getSiteMeta(metaData);
    },
  },

  head() {
    return {
      title: this.post.title,
      meta: [
        ...this.meta,
        {
          property: 'post:published_time',
          content: this.post.gitCreatedAt,
        },
        {
          property: 'post:modified_time',
          content: this.post.gitUpdatedAt,
        },
        {
          property: 'post:tag',
          content: this.post.tags ? this.post.tags.toString() : '',
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: '' },
        { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: this.post.tags ? this.post.tags.toString() : '',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://dante.wiki/posts/${this.$route.params.slug}`,
        },
      ],
    };
  },
};
</script>
