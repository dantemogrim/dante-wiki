<template>
  <div>
    <Heading>All Posts {{ `🔖 Page ${pageNumber}` }}</Heading>
    <p class="ml-2">// Ordered by last update.</p>
    <ul
      class="flex flex-col justify-center md:mx-3 md:my-3 md:grid md:grid-cols-3 md:grid-rows-4 md:gap-4"
    >
      <div v-for="item of items" :key="item.slug">
        <PostCard :item="item" />
      </div>
    </ul>
    <section
      id="prev-next"
      class="flex items-center justify-around w-full h-20 mt-3"
    >
      <nuxt-link :to="previousPage" class="boombox-button"
        >Previous Page</nuxt-link
      >
      <nuxt-link
        v-if="nextPage"
        :to="`${pageNumber + 1}`"
        class="boombox-button"
        >Next Page</nuxt-link
      >
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const pageNumber = parseInt(params.number);

    const items = await $content('posts', params.slug)
      .only(['title', 'slug', 'tags', 'gitUpdatedAt'])
      .sortBy('gitUpdatedAt', 'desc')
      .limit(12)
      .skip(12 * (pageNumber - 1))
      .fetch();

    if (!items.length) {
      return error({ statusCode: 404, message: 'No posts found!' });
    }

    const nextPage = items.length === 12;
    const posts = nextPage ? items.slice(0, -1) : items;
    return { nextPage, items, pageNumber };
  },
  computed: {
    previousPage() {
      return this.pageNumber === 2
        ? '/posts'
        : `/posts/page/${this.pageNumber - 1}`;
    },
  },
};
</script>
