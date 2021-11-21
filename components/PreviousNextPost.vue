<template>
  <div class="w-full flex justify-around">
    <nuxt-link
      v-if="previousPost"
      :to="{ name: 'posts-slug', params: { slug: previousPost.slug } }"
      class="
        bg-skunkblue
        rounded-full
        p-3
        text-white
        whitespace-nowrap
        m-3
        transition
        duration-500
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-105
        shadow-lg
        hover:shadow-md
      "
    >
      👈 Previous Post
    </nuxt-link>
    <span v-else>&nbsp;</span>
    <nuxt-link
      v-if="nextPost"
      :to="{ name: 'posts-slug', params: { slug: nextPost.slug } }"
      class="
        bg-skunkblue
        rounded-full
        p-3
        text-white
        whitespace-nowrap
        m-3
        transition
        duration-300
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-105
        shadow-lg
        hover:shadow-md
      "
    >
      Next Post 👉
    </nuxt-link>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    previousPost: {
      type: Object,
      default: () => null,
    },
    nextPost: {
      type: Object,
      default: () => null,
    },
  },
};
</script>
