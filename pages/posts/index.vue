<template>
  <div class="md:m-4">
    <Heading>All Posts</Heading>
    <p class="ml-2 text-skunkblue">// Ordered by last updated post.</p>
    <ul
      class="flex flex-col justify-center m-0 list-none md:my-3 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-5 md:gap-4"
    >
      <div
        class="flex flex-col justify-between h-full p-2 m-2 transition duration-300 ease-in-out transform bg-white rounded-md shadow-md hover:-translate-y-1 hover:scale-101"
        v-for="item of items"
        :key="item.slug"
      >
        <PostCards :item="item" />
      </div>
    </ul>

    <section
      id="next"
      v-if="nextPage"
      class="flex items-center w-full h-20 mt-3 text-sm uppercase font-jetbrains-mono"
    >
      <nuxt-link
        to="posts/page/2"
        class="flex items-center justify-center w-40 h-8 p-3 ml-2 text-white bg-indigo-400 rounded-full shadow-md hover:animate-wiggle whitespace-nowrap"
        >Next page 👉</nuxt-link
      >
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const items = await $content('posts', params.slug)
      .only(['title', 'slug', 'tags', 'path', 'gitUpdatedAt'])
      .sortBy('gitUpdatedAt', 'desc')
      .limit(10)
      .fetch();

    const nextPage = items.length === 10;
    const posts = nextPage ? items.slice(0, -1) : items;

    return {
      nextPage,
      items,
    };
  },

  head: {
    title: 'Posts',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'All posts on dante.wiki.',
      },
    ],
  },
};
</script>
