<template>
  <div>
    <div class="flex items-center justify-center mx-2 my-5 md:mx-0">
      <img
        class="rounded-md shadow-md"
        src="hello.svg"
        alt="A command-line interface outputting prompt/interview questions where I say that I am Dante Mogrim, a Web Developer and that this is my personal wikipedia of web dev related findings."
      />
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
