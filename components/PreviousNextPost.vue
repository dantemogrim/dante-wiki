<template>
  <div
    class="flex items-center justify-around w-full h-20 mt-3 text-sm uppercase font-cartridge"
  >
    <nuxt-link
      v-if="previous"
      :to="{ name: 'posts-slug', params: { slug: previous.slug } }"
      class="flex items-center justify-center w-40 h-8 p-3 text-white bg-indigo-400 rounded-full shadow-md hover:animate-wiggle whitespace-nowrap"
    >
      <span class="mr-2"></span>Previous <slot></slot>
    </nuxt-link>

    <span v-else>&nbsp;</span>
    <nuxt-link
      v-if="next"
      :to="{ name: 'posts-slug', params: { slug: next.slug } }"
      class="flex items-center justify-center w-40 h-8 p-3 text-white bg-indigo-400 rounded-full shadow-md hover:animate-wiggle whitespace-nowrap"
    >
      Next <slot></slot>
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
