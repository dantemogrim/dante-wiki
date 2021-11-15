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
      { property: 'og:site_name', content: 'I Love Painting' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://bobross.com',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'My Amazing Blog on The Joy of Painting',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Articles focused on the beautiful art of landscape painting.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/a-lovely-image.png',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: '@bobross' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://bobross.com',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'My Amazing Blog on The Joy of Painting',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Articles focused on the beautiful art of landscape painting.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/a-loveley-image.png',
      },
    ],

    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://bobross.com',
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
