<template>
  <li class="h-full">
    <nuxt-link
      class="flex flex-col justify-between h-full"
      :to="{ name: 'posts-slug', params: { slug: item.slug } }"
    >
      <h3 class="m-0 mb-1 visited:text-green-400 font-jetbrains-mono">
        {{ item.title }}
      </h3>
      <div class="flex mb-1 tagWrapper">
        <div v-for="tag in item.tags" :key="tag">
          <p
            class="px-1 py-1 mr-2 text-sm bg-green-200 rounded-lg font-jetbrains-mono"
          >
            #{{ tag }}
          </p>
        </div>
      </div>
      <p class="m-0 mt-2 text-xs">✏️ {{ formatDate(item.gitUpdatedAt) }}</p>
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
