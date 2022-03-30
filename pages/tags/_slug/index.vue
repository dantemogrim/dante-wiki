<template>
  <div class="md:m-4">
    <article
      class="flex flex-col p-4 m-2 rounded-md shadow-lg tagWrapper bg-gray-50"
    >
      <div class="p-1 pl-2 mb-2 bg-green-200 rounded-md">
        <h1>{{ tag.emoji }} #{{ tag.name }}</h1>
      </div>
      <p class="my-2">{{ tag.description }}</p>
      <hr />
      <div class="p-3 text-white bg-img"></div>
    </article>

    <div v-if="postsExist">
      <Subheading>Related Posts</Subheading>
      <p class="ml-2 md:ml-0">// Ordered by last update.</p>
    </div>
    <ul
      class="flex flex-col justify-center md:mx-3 md:my-3 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4"
    >
      <div v-for="item of items" :key="item.slug">
        <PostCard :item="item" />
      </div>
    </ul>
    <section
      id="next"
      v-if="nextPage"
      class="flex items-center justify-center w-full h-20 mt-3"
    >
      <nuxt-link :to="`/tags/${tag.name}/page/2`" class="boombox-button"
        >Next page</nuxt-link
      >
    </section>
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta';

export default {
  props: {
    postExist: {
      type: Boolean,
      default: false,
    },
  },
  async asyncData({ $content, params }) {
    const tag = await $content('tags', params.slug).fetch();

    const items = await $content('posts')
      .only(['title', 'slug', 'tags', 'gitUpdatedAt'])
      .where({
        tags: { $contains: params.slug },
      })
      .sortBy('gitUpdatedAt', 'desc')
      .limit(12)
      .fetch();

    const postsExist = items.length > 0;
    const nextPage = items.length === 12;
    const posts = nextPage ? items.slice(0, -1) : items;

    return {
      nextPage,
      tag,
      items,
    };
  },

  computed: {
    meta() {
      const metaData = {
        type: 'tag',
        title: `${this.tag.name} Posts | Dante Mogrim`,
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
          href: `https://dante.wiki/tags/${this.$route.params.slug}`,
        },
      ],
    };
  },
};
</script>
