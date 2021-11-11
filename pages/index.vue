<template>
  <div>
    <div
      class="headline-card flex justify-center text-center items-center p-3 m-3"
    >
      <h1 class="">Welcome</h1>
      <p v-if="$nuxt.isOffline">Oops! You are offline. 😱</p>
    </div>
    <article
      class="
        articleWrapper
        bg-gray-50
        flex flex-col
        p-4
        rounded-md
        shadow-lg
        m-2
      "
    >
      <p>
        Increase the resolution, scale it up we need a larger print workflow
        ecosystem, we don't need to boil the ocean here market-facing. I know
        you're busy throughput curate pixel pushing, yet core competencies.
      </p>
    </article>

    <h2>Latest</h2>

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
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<!-- <p>Author: {{ post.author.name }}</p> -->

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
      .limit(5)
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
  background-color: #b3dac3;
  clip-path: polygon(4% 5%, 96% 8%, 97% 94%, 3% 94%);
}
</style>
