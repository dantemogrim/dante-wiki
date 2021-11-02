<template>
  <nuxt-link :to="articleLink" class="article-teaser block px-3 rounded">
    <h3 class="pt-2 pb-4 text-2xl">
      {{ articleContent.title }}
    </h3>
    <p class="pb-6 leading-relaxed">
      {{ articleContent.description }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    articleContent: {
      type: Object,

      required: true,
    },
    articleLink: {
      type: String,

      required: true,
    },
  },
};
</script>
