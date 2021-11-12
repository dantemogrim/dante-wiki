<template>
  <div>
    <div class="headingCard mt-4 mx-2 p-3">
      <h1 class="">Hi, im.dante</h1>
      <p v-if="$nuxt.isOffline">Oops! You are offline. 😱</p>
    </div>

    <article class="bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2">
      <p class="m-1">
        I am a web developer student living in Gothenburg, Sweden. Welcome to my
        digital garden where I’ll be sharing all kinds of development related
        findings as well as other fun things.
      </p>
      <p class="m-1">
        This project is meant to serve both a personal and open source
        notebook/blog. A resource accessible for anyone to gather different
        kinds of useful, comprehensive information when it comes to web
        development.
      </p>
    </article>

    <div class="subheadingCard mt-6 mx-2 p-3">
      <h2>Latest</h2>
    </div>

    <ul class="articleCardWrapper m-0 list-none flex flex-col justify-center">
      <li v-for="post of posts" :key="post.slug">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
          <div class="articleWrapper m-2 p-2 bg-red-100 rounded-md">
            <img :src="post.img" />
            <h3 class="m-0">{{ post.title }}</h3>
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
    // If using Nuxt <= 2.12, use 👇

    // const tags = await $content('tags', params.slug)
    //   .only(['title', 'slug'])
    //   .where({ title: { $containsAny: post.tags } })
    //   .sortBy('title', 'asc')
    //   .fetch();

    const posts = await $content('posts', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author', 'tags'])
      .limit(5)
      .sortBy('createdAt', 'desc')
      .fetch();

    return {
      posts,
    };
  },
};
</script>

<style scoped>
.headingCard {
  background-color: #b3dac3;
  clip-path: polygon(100% 0%, 93% 51%, 100% 100%, 0 100%, 0% 50%, 0 0);
}

.subheadingCard {
  background-color: #a3cbce;
  clip-path: polygon(100% 0%, 93% 51%, 100% 100%, 0 100%, 0% 50%, 0 0);
}
</style>
