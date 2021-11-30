<template>
  <div class="md:m-4">
    <Heading class="mb-2">All Tags</Heading>
    <ul
      class="
        m-0
        list-none
        flex flex-col
        justify-center
        md:my-3 md:grid md:grid-flow-row md:grid-cols-3 md:grid-rows-8 md:gap-4
      "
    >
      <div v-for="item of items" :key="item.slug">
        <TagCards :item="item" />
      </div>
    </ul>
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta';

export default {
  async asyncData({ $content, params }) {
    const items = await $content('tags', params.slug)
      .only(['name', 'emoji', 'slug'])
      .sortBy('name', 'asc')
      .fetch();

    return {
      items,
    };
  },
  head: {
    title: 'Tags',
  },
  computed: {
    meta() {
      const metaData = {
        title: `Tags | dante.wiki`,
        description: this.tag.description,
        url: `${this.$config.baseUrl}/tags`,
      };
      return getSiteMeta(metaData);
    },
  },
};
</script>
