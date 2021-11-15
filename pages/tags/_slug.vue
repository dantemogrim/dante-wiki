<template>
  <div>
    <article
      class="tagWrapper bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2"
    >
      <h1>{{ tag.emoji }} #{{ tag.name }}</h1>
      <p>{{ tag.description }}</p>
      <hr />
      <div class="headline-card text-center p-3">
        <h2>Related posts:</h2>
      </div>
      <ul class="articleCardWrapper m-0 list-none flex flex-col justify-center">
        <li v-for="post of posts" :key="post.slug">
          <nuxt-link
            :to="{
              name: 'posts-slug',
              params: { slug: post.slug },
            }"
          >
            <div class="articleWrapper m-2 p-2 bg-red-100 rounded-md">
              <img :src="post.img" />
              <h3 class="m-0">{{ post.title }}</h3>
              <small>✏️ {{ formatDate(post.updatedAt) }}</small>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta';

export default {
  async asyncData({ $content, params }) {
    const tag = await $content('tags', params.slug).fetch();

    const posts = await $content('posts')
      .where({
        tags: { $contains: params.slug },
      })
      .fetch();

    return {
      tag,
      posts,
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
        type: 'tag',
        title: this.tag.name,
        description: this.tag.description,
        url: `${this.$config.baseUrl}/tags/${this.$route.params.slug}`,
      };
      return getSiteMeta(metaData);
    },
  },

  head() {
    return {
      title: this.tag.name,
      meta: [
        ...this.meta,
        { name: 'twitter:label1', content: 'Author:' },
        { name: 'twitter:data1', content: 'Dante Mogrim' },
        { name: 'twitter:label2', content: 'Filed under:' },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://dante.im/tags/${this.$route.params.slug}`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.headline-card {
  background-color: #b3dac3;
  clip-path: polygon(4% 5%, 96% 8%, 97% 94%, 3% 94%);
}
</style>
