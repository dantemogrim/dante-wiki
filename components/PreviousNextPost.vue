<template>
  <div
    class="flex items-center justify-around w-full h-20 mt-3 text-sm uppercase font-cartridge"
  >
    <nuxt-link
      v-if="previous"
      :to="{ name: 'posts-slug', params: { slug: previous.slug } }"
      class="boombox-button"
    >
      Previous <slot></slot>
    </nuxt-link>

    <span v-else>&nbsp;</span>
    <nuxt-link
      v-if="next"
      :to="{ name: 'posts-slug', params: { slug: next.slug } }"
      class="boombox-button"
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
