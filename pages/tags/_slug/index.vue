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
      <p class="ml-2 text-skunkblue">// Ordered by last updated post.</p>
    </div>
    <ul
      class="flex flex-col m-0 list-none md:my-3 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-5 md:gap-4"
    >
      <div
        class="flex flex-col justify-between h-full p-2 m-2 transition duration-300 ease-in-out transform rounded-md shadow-lg bg-gray-50 hover:-translate-y-1 hover:scale-101"
        v-for="item of items"
        :key="item.slug"
      >
        <PostCards :item="item" />
      </div>
    </ul>
    <section
      id="next"
      v-if="nextPage"
      class="flex items-center justify-center w-full h-20 mt-3 text-sm uppercase font-cartridge"
    >
      <nuxt-link
        :to="`/tags/${tag.name}/page/2`"
        class="flex items-center justify-center w-40 h-8 p-3 ml-2 text-white bg-indigo-400 rounded-full shadow-md hover:animate-wiggle whitespace-nowrap"
        >Next page 👉</nuxt-link
      >
    </section>
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta';

export default {
  async asyncData({ $content, params }) {
    const tag = await $content('tags', params.slug).fetch();

    const items = await $content('posts')
      .only(['title', 'slug', 'tags', 'gitUpdatedAt'])
      .where({
        tags: { $contains: params.slug },
      })
      .sortBy('gitUpdatedAt', 'desc')
      .limit(10)
      .fetch();

    const postsExist = items.length > 0;
    const nextPage = items.length === 10;
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
