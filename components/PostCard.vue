<template>
  <li
    class="h-16 m-2 transition duration-300 ease-in-out transform bg-gray-200 rounded-md shadow-md font-jetbrains-mono border-3 md:m-0 hover:-translate-y-1 hover:scale-101"
  >
    <nuxt-link
      class="grid h-full grid-rows-3"
      :to="{ name: 'posts-slug', params: { slug: item.slug } }"
    >
      <div class="row-start-1 row-end-2">
        <h3
          class="p-2 overflow-hidden text-left w-96 lg:w-auto whitespace-nowrap text-blue-link text-ellipsis"
        >
          {{ item.title }}
        </h3>
      </div>
      <div
        class="flex items-center row-start-3 row-end-3 p-1 bg-slate-100 rounded-b-md"
      >
        <div class="w-fit" v-for="tag in item.tags" :key="tag">
          <p class="px-1 py-1 mr-2 text-xs rounded-lg">#{{ tag }}</p>
          <!-- <Tag :name="tag" /> -->
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
import Tag from '~/components/global/Tag.vue';

export default {
  components: {
    Tag,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    tags: {
      type: Array,
    },
    tag: {
      type: Object,
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
