<template>
  <nuxt-link
    :to="topicLink"
    class="bg-yellow-200 article-teaser block px-3 rounded"
  >
    <h3 class="pt-2 pb-4 text-2xl">
      {{ topicContent.name }}
    </h3>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    topicContent: {
      type: Object,
      required: true,
    },
    topicLink: {
      type: String,
      required: true,
    },
  },
};
</script>
