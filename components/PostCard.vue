<template>
  <li
    class="m-2 transition duration-300 ease-in-out transform bg-gray-300 rounded-md shadow-md h-36 border-3 lg:m-0 hover:-translate-y-1 hover:scale-101"
  >
    <nuxt-link
      class="grid h-full grid-rows-3"
      :to="{ name: 'posts-slug', params: { slug: item.slug } }"
    >
      <div class="row-start-1 row-end-2">
        <h3 class="p-2 text-xl text-left font-cartridge">
          {{ item.title }}
        </h3>
      </div>
      <div
        class="flex items-center row-start-3 row-end-3 p-1 bg-slate-200 rounded-b-md"
      >
        <div class="w-fit" v-for="tag in item.tags" :key="tag">
          <p class="px-1 py-1 mr-2 text-sm rounded-lg font-cartridge">
            #{{ tag }}
          </p>
        </div>
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
    tags: {
      type: Array,
    },
  },

  methods: {
    formatDate(gitUpdatedAt) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return new Date(gitUpdatedAt).toLocaleDateString('en-GB', options);
    },
  },
};
</script>
