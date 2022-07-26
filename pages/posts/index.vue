<template>
  <div>
    <Heading>All Posts</Heading>
    <p>// Ordered by last update.</p>
    <ul
      class="flex flex-col justify-center md:my-3 md:grid md:grid-cols-1 md:grid-rows-10 md:gap-4"
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
      <nuxt-link to="posts/page/2" class="standard-button">Next page</nuxt-link>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const items = await $content('posts', params.slug)
      .only(['title', 'slug', 'tags', 'path', 'gitUpdatedAt'])
      .sortBy('gitUpdatedAt', 'desc')
      .limit(15)
      .fetch();

    const nextPage = items.length === 15;
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
