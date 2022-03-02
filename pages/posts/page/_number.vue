<template>
  <div>
    <Heading>All Posts {{ `🔖 Page ${pageNumber}` }}</Heading>
    <p class="ml-2 text-skunkblue">// Ordered by last updated post.</p>
    <ul
      class="flex flex-col justify-center m-0 list-none md:my-3 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-5 md:gap-4"
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
      id="prev-next"
      class="flex items-center justify-around w-full h-20 mt-3 text-sm uppercase font-cartridge"
    >
      <nuxt-link
        :to="previousPage"
        class="flex items-center justify-center w-40 h-8 p-3 text-white bg-indigo-400 rounded-full shadow-md hover:animate-wiggle whitespace-nowrap"
        >👈 Previous Page</nuxt-link
      >
      <nuxt-link
        v-if="nextPage"
        :to="`${pageNumber + 1}`"
        class="flex items-center justify-center w-40 h-8 p-3 text-white bg-indigo-400 rounded-full shadow-md hover:animate-wiggle whitespace-nowrap"
        >Next Page 👉</nuxt-link
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
      .limit(10)
      .skip(10 * (pageNumber - 1))
      .fetch();

    if (!items.length) {
      return error({ statusCode: 404, message: 'No posts found!' });
    }

    const nextPage = items.length === 10;
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
