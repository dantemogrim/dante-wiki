<template>
  <div class="md:m-4">
    <div class="flex justify-center">
      <img
        class="mt-3"
        src="/selfie.png"
        alt="An illustration of me peeking up and smiling."
      />
    </div>
    <article class="flex flex-col p-4 m-2 bg-white rounded-md shadow-md">
      <p class="m-1">
        Hello! I'm Dante Mogrim. I am a web developer student living in
        Gothenburg, Sweden. Welcome to my personal wikipedia of web development
        findings.
      </p>
    </article>
    <Subheading>Latest Posts</Subheading>

    <ul
      class="m-0 list-none sm:flex sm:flex-col sm:justify-center md:my-3 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-3 md:gap-4"
    >
      <div
        class="p-2 m-2 mt-3 transition duration-300 ease-in-out transform bg-white rounded-md shadow-md hover:-translate-y-1 hover:scale-101"
        v-for="item of items"
        :key="item.slug"
      >
        <PostCards :item="item" />
      </div>
    </ul>
  </div>
</template>

<script>
export default {
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
