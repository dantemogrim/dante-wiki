<template>
  <div class="md:m-4">
    <article
      class="tagWrapper bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2"
    >
      <div class="bg-green-200 mr-2 p-1 rounded-md">
        <h1>{{ tag.emoji }} #{{ tag.name }}</h1>
      </div>
      <p>{{ tag.description }}</p>
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
        v-for="item of items"
        :key="item.slug"
        class="
          h-full
          m-2
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
      >
        <PostCards :item="item" />
      </div>
    </ul>
    <section id="prev-next" class="flex justify-between items-center">
      <nuxt-link
        :to="previousLink"
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
          shadow
          hover:shadow-sm
        "
        >👈 Previous page</nuxt-link
      >
      <nuxt-link
        v-if="nextPage"
        :to="`${pageNumber + 1}`"
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
    // An object!
    const tag = await $content('tags', params.slug).fetch();

    const pageNumber = parseInt(params.number);

    const items = await $content('posts')
      .only(['title', 'slug', 'tags', 'gitUpdatedAt'])
      .where({
        tags: { $contains: tag.slug },
      })
      .sortBy('gitUpdatedAt', 'desc')
      .limit(10)
      .skip(10 * (pageNumber - 1))
      .fetch();

    if (!items.length) {
      return error({ statusCode: 404, message: 'No posts found!' });
    }

    const nextPage = items.length === 10;
    const posts = nextPage ? items.slice(0, -1) : items;

    return {
      nextPage,
      tag,
      items,
      pageNumber,
    };
  },
  computed: {
    previousLink() {
      return this.pageNumber === 2
        ? `/tags/${this.tag.slug}`
        : `/tags/${this.tag.slug}/page/${this.pageNumber - 1}`;
    },
    meta() {
      const metaData = {
        type: 'tag',
        title: `${this.tag.name} Posts | dante.wiki`,
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
