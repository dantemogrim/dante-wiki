<template>
  <div>
    <article
      class="
        articleWrapper
        bg-gray-50
        flex flex-col
        p-4
        rounded-md
        shadow-lg
        m-2
      "
    >
      <gif :gif="post.gif" />
      <h1>{{ post.title }}</h1>
      <p class="mt-2 mb-2">{{ post.description }}</p>
      <div class="flex text-center items-center">
        <span> Tags: </span>
        <span v-for="tag in post.tags" :key="tag" class="">
          <div class="flex text-center">
            <nuxt-link
              :to="`/tags/${tag}`"
              class="bg-green-200 m-2 p-1 rounded-md"
              >#{{ tag }}
            </nuxt-link>
          </div>
        </span>
      </div>
      <author :author="post.author" />
      <div class="mb-2 bg-indigo-100 rounded-2xl p-3 w-2/3">
        <p class="m-0">🌱 created {{ formatDate(post.createdAt) }}</p>
        <p class="m-0">✏️ updated {{ formatDate(post.updatedAt) }}</p>
      </div>
      <hr />
      <!-- TOC - Table of Contents -->
      <nav class="bg-blue-100 rounded-2xl p-3 w-2/3">
        <p class="m-0 font-bold">Table of Contents:</p>
        <ul>
          <li v-for="link of post.toc" :key="link.id">
            <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <nuxt-content :document="post" />
      <previous-next-post :previousPost="previousPost" :nextPost="nextPost" />
    </article>
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta';

export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch();

    const [previousPost, nextPost] = await $content('posts')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch();

    return {
      post,
      previousPost,
      nextPost,
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
        title: this.post.title,
        description: this.post.description,
        url: `${this.$config.baseUrl}/posts/${this.$route.params.slug}`,
        mainImage: this.post.gif,
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
          content: this.post.createdAt,
        },
        {
          property: 'post:modified_time',
          content: this.post.updatedAt,
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
