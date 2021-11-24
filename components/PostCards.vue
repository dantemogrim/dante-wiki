<template>
  <li class="h-full">
    <nuxt-link
      class="h-full flex flex-col justify-between"
      :to="{ name: 'posts-slug', params: { slug: item.slug } }"
    >
      <h3 class="mb-1 m-0">{{ item.title }}</h3>
      <!--  <div class="tagWrapper mb-1">
          <span v-for="tag in item.tags" :key="tag" class="">
            <nuxt-link
              :to="`/tags/${tag}`"
              class="bg-green-200 mt-2 mr-3 p-1 rounded-md"
              >#{{ tag }}
            </nuxt-link>
          </span>
        </div> -->
      <p class="text-xs mt-2 m-0">✏️ {{ formatDate(item.updatedAt) }}</p>
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

  methods: {
    formatDate(updatedAt) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return new Date(updatedAt).toLocaleDateString('en-GB', options);
      //  date = new Date(date).toLocaleDateString('en-GB', options);
      // return date;
    },
  },
};
</script>
