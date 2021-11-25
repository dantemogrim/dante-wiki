<template>
  <div class="md:m-4">
    <article
      class="tagWrapper bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2"
    >
      <div class="mb-2 pl-2 bg-green-200 p-1 rounded-md">
        <h1>{{ tag.emoji }} #{{ tag.name }}</h1>
      </div>
      <p class="my-2">{{ tag.description }}</p>
      <hr />
      <div class="bg-img text-white p-3"></div>
    </article>
    <Subheading>Related Posts</Subheading>
    <p class="ml-2 text-skunkblue">// Ordered by last updated post.</p>
    <ul
      class="
        m-0
        list-none
        flex flex-col
        md:my-3 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-5 md:gap-4
      "
    >
      <div
        class="
          m-2
          h-full
          p-2
          bg-gray-50
          rounded-md
          shadow-lg
          transition
          duration-300
          ease-in-out
          transform
          hover:-translate-y-1 hover:scale-101
          flex flex-col
          justify-between
        "
        v-for="item of items"
        :key="item.slug"
      >
        <PostCards :item="item" />
      </div>
    </ul>
    <section id="next" v-if="nextPage" class="flex">
      <nuxt-link
        :to="`/tags/${tag.name}/page/2`"
        class="
          m-2
          bg-skunkblue
          text-white
          p-2
          rounded-lg
          transition
          duration-300
          ease-in-out
          transform
          hover:-translate-y-1 hover:scale-105
          shadow-lg
          hover:shadow-md
        "
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
