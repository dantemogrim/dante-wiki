<template>
  <div>
    <Heading>All Posts {{ `🔖 Page ${pageNumber}` }}</Heading>
    <p>// Ordered by last update.</p>
    <ul
      class="flex flex-col justify-center md:my-3 md:grid md:grid-cols-1 md:grid-rows-10 md:gap-4"
    >
      <div v-for="item of items" :key="item.slug">
        <PostCard :item="item" />
      </div>
    </ul>
    <section
      id="prev-next"
      class="flex items-center justify-around w-full h-20 mt-3"
    >
      <nuxt-link :to="previousPage" class="standard-button"
        >Previous Page</nuxt-link
      >
      <nuxt-link
        v-if="nextPage"
        :to="`${pageNumber + 1}`"
        class="standard-button"
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
      .limit(15)
      .skip(15 * (pageNumber - 1))
      .fetch();

    if (!items.length) {
      return error({ statusCode: 404, message: 'No posts found!' });
    }

    const nextPage = items.length === 15;
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
