<template>
  <div class="md:m-4">
    <Subheading>Test Page</Subheading>
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
    title: 'Tags | Dante Mogrim',
  },
};
</script>
