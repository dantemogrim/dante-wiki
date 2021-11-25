<template>
  <li>
    <nuxt-link :to="{ name: 'tags-slug', params: { slug: item.slug } }">
      <div
        class="
          flex flex-col
          justify-center
          h-full
          tagWrapper
          m-2
          p-2
          bg-gray-50
          rounded-md
          shadow-lg
          transition
          duration-300
          ease-in-out
          transform
          hover:-translate-y-1 hover:scale-101
        "
      >
        <h3 class="m-0">{{ item.emoji }} #{{ item.name }}</h3>
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
