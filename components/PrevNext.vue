<template>
  <div class="w-full flex justify-around">
    <nuxt-link
      v-if="prev"
      :to="{ name: 'posts-slug', params: { slug: prev.slug } }"
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
      v-if="next"
      :to="{ name: 'posts-slug', params: { slug: next.slug } }"
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
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
};
</script>
