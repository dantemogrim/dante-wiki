<template>
  <div>
    <div class="headingCard mt-4 mx-2 p-3">
      <h1 class="text-white">All Tags</h1>
      <p v-if="$nuxt.isOffline">Oops! You are offline. 😱</p>
    </div>
    <ul class="m-0 list-none flex flex-col justify-center">
      <li v-for="tag of tags" :key="tag.slug">
        <nuxt-link :to="{ name: 'tags-slug', params: { slug: tag.slug } }">
          <div class="tagWrapper m-2 p-2 bg-white rounded-md shadow-lg">
            <h3 class="m-0">{{ tag.emoji }} #{{ tag.name }}</h3>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tags = await $content('tags', params.slug)
      .only(['name', 'description', 'emoji', 'slug'])
      .sortBy('name', 'asc')
      .fetch();

    return {
      tags,
    };
  },

  head: {
    title: 'Tags',

    meta: [
      { property: 'og:site_name', content: 'Dante Mogrim' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://dante.im',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Tags',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'All tags related to web development posts.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/meta.png',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: '' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://dante.im',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Tags',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'All tags related to web development posts.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: './static/meta.png',
      },
    ],

    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://dante.im',
      },
    ],
  },
};
</script>

<style scoped>
.headingCard {
  background-color: #505d8c;
  clip-path: polygon(100% 0%, 93% 51%, 100% 100%, 0 100%, 0% 50%, 0 0);
}
</style>
