<template>
  <div class="w-full flex justify-around">
    <nuxt-link
      v-if="previousPost"
      :to="{ name: 'posts-slug', params: { slug: previousPost.slug } }"
      class="
        bg-blue-500
        rounded-full
        py-3
        px-6
        text-white
        whitespace-nowrap
        m-3
        hover:underline
      "
    >
      👈 Previous
    </nuxt-link>
    <span v-else>&nbsp;</span>
    <nuxt-link
      v-if="nextPost"
      :to="{ name: 'posts-slug', params: { slug: nextPost.slug } }"
      class="
        bg-blue-500
        rounded-full
        py-3
        px-6
        text-white
        whitespace-nowrap
        m-3
        hover:underline
      "
    >
      Next 👉
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
