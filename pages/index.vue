<template>
  <div>
    <div class="flex items-center justify-center m-4">
      <img
        class="rounded-md shadow-md"
        src="greeting.svg"
        alt="A command-line interface outputting the text: 'Hi! I'm Dante Mogrim. Welcome to my personal wikipedia of web dev related findings. Have a nice day!'"
      />
    </div>
    <Subheading>Latest Posts</Subheading>
    <div class="flex-col items-center justify-center w-full h-fit">
      <ul class="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4">
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
