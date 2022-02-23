<template>
  <li>
    <nuxt-link :to="{ name: 'tags-slug', params: { slug: item.slug } }">
      <div
        class="flex flex-col justify-center h-full p-2 m-2 transition duration-300 ease-in-out transform bg-white rounded-md shadow-md tagWrapper hover:-translate-y-1 hover:scale-101"
      >
        <h3 class="m-0 font-jetbrains-mono">
          {{ item.emoji }} #{{ item.name }}
        </h3>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
