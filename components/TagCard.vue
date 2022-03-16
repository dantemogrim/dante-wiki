<template>
  <nuxt-link
    class="flex items-center justify-center h-16 m-2 uppercase transition duration-300 ease-in-out transform bg-gray-400 rounded-lg shadow-md whitespace-nowrap md:m-0 tagWrapper hover:-translate-y-1 hover:scale-101"
    :to="{ name: 'tags-slug', params: { slug: item.slug } }"
  >
    <div class="w-1/6 h-0.5 bg-gray-500" />
    <div
      :class="item.color"
      class="flex items-center justify-center w-11/12 text-center rounded-lg ring-2 ring-gray-500 h-2/3"
    >
      <h3 class="text-buttermilk ligatures font-cartridge" v-html="item.name" />
    </div>
    <div class="w-1/6 h-0.5 bg-gray-500" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'bg-green-600',
    },
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
