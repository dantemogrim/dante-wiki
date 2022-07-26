<template>
  <div>
    <div class="flex flex-col items-center justify-center my-5">
      <img src="peekaboo.png" alt="A drawing of me peeking up." />
      <p class="p-3 pixelFrame">
        Hi! I'm Dante Mogrim. Welcome to my website where I sometimes scribble
        down tech sassy notes for anyone to take part of.
      </p>
    </div>
    <Subheading>Latest Posts</Subheading>
    <div class="flex-col items-center justify-center h-fit">
      <ul class="md:grid md:grid-cols-1 md:grid-rows-10 md:gap-4">
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
      .limit(10)
      .fetch();

    return {
      items,
    };
  },
};
</script>
