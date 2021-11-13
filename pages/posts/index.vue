<template>
  <div>
    <div class="headingCard mt-4 mx-2 p-3">
      <h1 class="">All Posts</h1>
      <p v-if="$nuxt.isOffline">Oops! You are offline. 😱</p>
    </div>

    <ul class="articleCardWrapper m-0 list-none flex flex-col justify-center">
      <li v-for="post of posts" :key="post.slug">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
          <div class="articleWrapper m-2 p-2 bg-white rounded-md shadow-lg">
            <img :src="post.img" />
            <h3 class="m-0">{{ post.title }}</h3>

            <div class="tagWrapper">
              <span v-for="tag in post.tags" :key="tag" class="">
                <nuxt-link
                  :to="`/tags/${tag}`"
                  class="bg-green-200 mr-2 p-1 rounded-md"
                  >#{{ tag }}
                </nuxt-link>
              </span>
            </div>

            <p class="text-xs mt-2 m-0">
              Created @ {{ formatDate(post.createdAt) }}
            </p>
            <p class="text-xs mt-2 m-0">
              Updated @ {{ formatDate(post.updatedAt) }}
            </p>
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
    const posts = await $content('posts', params.slug)
      .only([
        'title',
        'description',
        'img',
        'slug',
        'author',
        'tags',
        'updatedAt',
        'createdAt',
      ])
      .sortBy('createdAt', 'asc')
      .fetch();

    return {
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
.headingCard {
  background-color: #cecff0;
  clip-path: polygon(100% 0%, 93% 51%, 100% 100%, 0 100%, 0% 50%, 0 0);
}

.sortingOptions {
  background-color: #a3cbce;
}
</style>
