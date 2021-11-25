<template>
  <div class="md:m-4">
    <Heading>All Posts</Heading>
    <p class="ml-2 text-skunkblue">// Ordered by last updated post.</p>
    <ul
      class="
        m-0
        list-none
        flex flex-col
        justify-center
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
        to="posts/page/2"
        class="
          m-2
          bg-skunkblue
          text-white
          p-2
          rounded-full
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
