<template>
  <div>
    <div class="headline-card text-center p-3">
      <h1 class="">Blog Posts</h1>
      <p v-if="$nuxt.isOffline">Oops! You are offline. 😱</p>
    </div>
    <ul class="articleCardWrapper flex flex-col justify-center">
      <li v-for="post of posts" :key="post.slug">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
          <div class="articleWrapper m-2 p-2 bg-red-100 rounded-md">
            <img :src="post.img" />
            <h2>{{ post.title }}</h2>
            <p>Author: {{ post.author.name }}</p>
            <p>Published:</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('posts', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch();

    return {
      posts,
    };
  },
};
</script>

<style scoped>
.headline-card {
  background-color: #cecff0;
  clip-path: polygon(4% 5%, 96% 8%, 97% 94%, 3% 94%);
}
</style>
