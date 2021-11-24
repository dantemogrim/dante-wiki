<template>
  <li class="h-full">
    <nuxt-link
      class="h-full flex flex-col justify-between"
      :to="{ name: 'posts-slug', params: { slug: item.slug } }"
    >
      <h3 class="mb-1 m-0">{{ item.title }}</h3>
      <div class="tagWrapper mb-1">
        <span
          v-for="tag in item.tags"
          :key="tags"
          class="bg-green-200 rounded-lg mr-2 p-1"
        >
          #{{ tag }}
        </span>
      </div>
      <p class="text-xs mt-2 m-0">✏️ {{ formatDate(item.gitUpdatedAt) }}</p>
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
