<template>
  <div>
    <article
      class="flex flex-col p-4 m-2 rounded-md shadow-lg tagWrapper bg-gray-50"
    >
      <div class="p-1 mr-2 bg-green-200 rounded-md">
        <h1>{{ tag.emoji }} #{{ tag.name }}</h1>
      </div>
      <p>{{ tag.description }}</p>
      <hr />
      <div class="p-3 text-white bg-img"></div>
    </article>
    <Subheading>Related Posts</Subheading>
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
      class="flex items-center justify-around w-full h-20 mt-3 text-sm uppercase font-cartridge"
    >
      <nuxt-link
        :to="previousLink"
        class="flex items-center justify-center w-40 h-8 p-3 text-white bg-indigo-400 rounded-full shadow-md hover:animate-wiggle whitespace-nowrap"
        >Previous page</nuxt-link
      >
      <nuxt-link
        v-if="nextPage"
        :to="`${pageNumber + 1}`"
        class="flex items-center justify-center w-40 h-8 p-3 text-white bg-indigo-400 rounded-full shadow-md hover:animate-wiggle whitespace-nowrap"
        >Next page</nuxt-link
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
      .limit(12)
      .skip(12 * (pageNumber - 1))
      .fetch();

    if (!items.length) {
      return error({ statusCode: 404, message: 'No posts found!' });
    }

    const nextPage = items.length === 12;
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
