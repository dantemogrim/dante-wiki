<template>
  <div class="md:m-4">
    <div class="headingCard mt-4 mx-2 p-3">
      <h1 class="text-white">All Posts</h1>
      <p v-if="$nuxt.isOffline">Oops! You're offline. 😱</p>
    </div>
    <ul
      class="
        m-0
        list-none
        flex flex-col
        justify-center
        md:my-3 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-5 md:gap-4
      "
    >
      <li v-for="post of tenPosts" :key="post.slug">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
          <div
            class="
              m-2
              p-2
              bg-white
              rounded-md
              shadow-lg
              transition
              duration-300
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-101
            "
          >
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
            <!-- <p class="text-xs mt-2 m-0">🌱 {{ formatDate(post.createdAt) }}</p> -->
            <p class="text-xs mt-2 m-0">✏️ {{ formatDate(post.updatedAt) }}</p>
          </div>
        </nuxt-link>
      </li>
    </ul>

    <section id="next" v-if="nextPage" class="flex">
      <nuxt-link
        to="posts/page/2"
        class="
          m-2
          bg-skunkblue
          text-white
          p-2
          rounded-full
          transition
          duration-300
          ease-in-out
          transform
          hover:-translate-y-1 hover:scale-105
        "
        >Next page 👉</nuxt-link
      >
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tenPosts = await $content('posts', params.slug)
      .only([
        'author',
        'updatedAt',
        'createdAt',
        'description',
        'path',
        'slug',
        'title',
        'tags',
      ])
      .sortBy('createdAt', 'desc')
      .limit(10)
      .fetch();

    const nextPage = tenPosts.length === 10;
    const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts;

    return {
      nextPage,
      tenPosts,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-GB', options);
    },
  },

  head: {
    title: 'Posts',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'A full list of all posts on dante.wiki.',
      },
    ],
  },
};
</script>
