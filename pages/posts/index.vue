<template>
  <div>
    <div class="headline-card text-center p-3">
      <h1 class="">All Posts (old to new)</h1>
      <p v-if="$nuxt.isOffline">Oops! You are offline. 😱</p>
    </div>
    <ul class="articleCardWrapper flex flex-col justify-center">
      <li v-for="post of posts" :key="post.slug">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
          <div class="articleWrapper m-2 p-2 bg-red-100 rounded-md">
            <img :src="post.img" />
            <h3>{{ post.title }}</h3>

            <div class="tagWrapper">
              <span v-for="tag in post.tags" :key="tag" class="">
                <nuxt-link
                  :to="`/tags/${tag}`"
                  class="bg-green-200 m-2 p-1 rounded-md"
                  >#{{ tag }}
                </nuxt-link>
              </span>
            </div>
            <!-- <p>Author: {{ post.author.name }}</p> -->
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    // const tags = await $content('tags', params.slug)
    //   .only(['title', 'slug'])
    //   .where({ title: { $containsAny: post.tags } })
    //   .sortBy('title', 'asc')
    //   .fetch();

    const posts = await $content('posts', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author', 'tags'])
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
