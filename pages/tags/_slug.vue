<template>
  <div>
    <article
      class="tagWrapper bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2"
    >
      <h1>{{ tag.emoji }} {{ tag.name }}</h1>
      <p>{{ tag.description }}</p>
      <hr />
      <nuxt-content :document="tag" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tag = await $content('tags', params.slug).fetch();

    // const posts = await $content('posts', params.slug)
    //   .only(['title', 'description', 'img', 'slug', 'author', 'tags'])
    //   .sortBy('createdAt', 'asc')
    //   .fetch();

    return {
      tag,
    };
  },
};
</script>
