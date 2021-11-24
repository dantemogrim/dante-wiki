<template>
  <div>
    <Heading>All Posts {{`🔖 Page ${pageNumber}`}}</Heading>
    <p class="ml-2 text-skunkblue">// Ordered by last updated.</p>
    <ul class="m-0 list-none flex flex-col justify-center
    md:my-3 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-5 md:gap-4
    ">
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
    </ul>
<section id="prev-next" class="flex justify-between items-center">
  <nuxt-link :to="previousLink" class="m-2 bg-skunkblue text-white p-2 rounded-full transition
        duration-300
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-105
        shadow-lg hover:shadow-md
        ">👈 Previous Page</nuxt-link>
  <nuxt-link v-if="nextPage" :to="`${pageNumber + 1}`" class="m-2 bg-skunkblue text-white p-2 rounded-full transition
        duration-300
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-105 shadow-lg
        hover:shadow-md">Next Page 👉</nuxt-link>
</section>

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
    previousLink() {
      return this.pageNumber === 2 ? '/posts' : `/posts/page/${this.pageNumber - 1}`;
    },
  },

};
</script>