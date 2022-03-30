<template>
  <nuxt-link
    :to="{ name: 'tags-slug', params: { slug: item.slug } }"
    class="flex items-center h-16 px-4 m-2 uppercase transition duration-300 ease-in-out transform bg-gray-200 rounded-lg shadow-md md:m-0 tagWrapper hover:-translate-y-1 hover:scale-101"
  >
    <div>
      <h6 class="text-medium font-semi-bold font-jetbrains-mono text-blue-link">
        {{ item.emoji }}
        <span class="tracking-wide ligatures">#{{ item.name }}</span>
      </h6>
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
