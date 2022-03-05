<template>
  <div class="md:m-4">
    <Heading>All Tags</Heading>
    <ul
      class="flex flex-col justify-center m-0 list-none md:my-3 sm:grid sm:grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4"
    >
      <div v-for="item of items" :key="item.slug">
        <TagCard :item="item" />
      </div>
    </ul>
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta';

export default {
  async asyncData({ $content, params }) {
    const items = await $content('tags', params.slug)
      .only(['name', 'emoji', 'slug', 'color'])
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
