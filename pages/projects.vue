<template>
  <div>
    <Heading>Projects</Heading>
    <div class="grid-flow-col" v-for="item of items" :key="item.slug">
      <p>{{ item.name }}</p>
      <img :src="item.gif.src" alt="" />
    </div>
  </div>
</template>

<script>
import Subheading from '~/components/Subheading.vue';

export default {
  components: {
    Subheading,
  },
  async asyncData({ $content, params }) {
    const items = await $content('projects')
      .only(['name', 'gif'])
      .sortBy('name', 'asc')
      .limit(6)
      .fetch();

    return {
      items,
    };
  },
};
</script>
