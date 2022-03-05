<template>
  <div>
    <div class="flex items-center justify-center m-4 h-28">
      <p class="inline-flex items-center h-10 p-3">
        Hello! I'm Dante Mogrim. Welcome to my personal wikipedia of web
        development findings.
      </p>
    </div>
    <Subheading>Latest Posts</Subheading>
    <div class="flex-col items-center justify-center w-full md:flex h-fit">
      <ul
        class="flex flex-col justify-center md:mx-3 md:my-3 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4"
      >
        <div class="grid-flow-col" v-for="item of items" :key="item.slug">
          <PostCard :item="item" />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import PostCard from '~/components/PostCard.vue';
import Subheading from '~/components/Subheading.vue';

export default {
  components: {
    PostCard,
    Subheading,
  },
  async asyncData({ $content, params }) {
    const items = await $content('posts')
      .only(['title', 'slug', 'tags', 'gitUpdatedAt'])
      .sortBy('gitUpdatedAt', 'desc')
      .limit(6)
      .fetch();

    return {
      items,
    };
  },
};
</script>
