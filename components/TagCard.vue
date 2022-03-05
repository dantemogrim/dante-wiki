<template>
  <!-- <pre class="text-white">{{ item.color }}</pre> -->
  <nuxt-link
    class="flex items-center justify-between h-16 m-2 uppercase transition duration-300 ease-in-out transform bg-gray-300 rounded-lg shadow-md md:text-sm whitespace-nowrap md:m-0 text-buttermilk tagWrapper hover:-translate-y-1 hover:scale-101"
    :to="{ name: 'tags-slug', params: { slug: item.slug } }"
  >
    <div class="px-2 py-1 ml-2 bg-gray-400 rounded-full">
      {{ item.emoji }}
    </div>

    <li :class="item.color" class="w-2/3 py-1 mx-2 text-center rounded-full">
      <h3 class="font-cartridge">
        <span class="ligatures" v-html="item.name" />
      </h3>
    </li>
    <div class="px-2 py-1 mr-2 bg-gray-400 rounded-full">
      {{ item.emoji }}
    </div>
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
