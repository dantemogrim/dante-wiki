<template>
  <div class="w-full flex justify-around">
    <nuxt-link
      v-if="previous"
      :to="{ name: 'posts-slug', params: { slug: previous.slug } }"
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
        shadow
        hover:shadow-sm
      "
    >
      👈 Previous <slot></slot>
    </nuxt-link>
    <span v-else>&nbsp;</span>
    <nuxt-link
      v-if="next"
      :to="{ name: 'posts-slug', params: { slug: next.slug } }"
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
      Next <slot></slot> 👉
    </nuxt-link>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    previous: {
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
