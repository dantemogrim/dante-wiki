<template>
  <div>
    <article
      class="tagWrapper bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2"
    >
      <h1>{{ tag.emoji }} #{{ tag.name }}</h1>
      <p>{{ tag.description }}</p>
      <hr />

      <div class="headline-card text-center p-3">
        <h2>Related posts:</h2>
      </div>

      <ul class="articleCardWrapper m-0 list-none flex flex-col justify-center">
        <li v-for="post of posts" :key="post.slug">
          <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
            <div class="articleWrapper m-2 p-2 bg-red-100 rounded-md">
              <img :src="post.img" />
              <h3 class="m-0">{{ post.title }}</h3>
              <small>Updated @ {{ formatDate(post.updatedAt) }}</small>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tag = await $content('tags', params.slug).fetch();

    const posts = await $content('posts')
      .where({
        tags: { $contains: params.slug },
      })
      .fetch();

    return {
      tag,
      posts,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    },
  },
};
</script>

<style scoped>
.headline-card {
  background-color: #b3dac3;
  clip-path: polygon(4% 5%, 96% 8%, 97% 94%, 3% 94%);
}
</style>
