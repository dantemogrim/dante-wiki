<template>
  <div>
    <div class="headingCard mt-4 mx-2 p-3">
      <h1 class="text-white">Hi, I'm Dante Mogrim.</h1>
      <p v-if="$nuxt.isOffline">Oops! You're offline. 😱</p>
    </div>
    <div class="flex justify-center">
      <img
        class="mt-3"
        src="~/static/images/selfie.png"
        alt="An illustration of me peeking up and smiling."
      />
    </div>
    <article class="bg-white flex flex-col p-4 rounded-md shadow-lg m-2">
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
      <h2 class="text-white">Latest</h2>
    </div>
    <ul class="m-0 list-none flex flex-col justify-center">
      <li v-for="post of posts" :key="post.slug">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
          <div class="articleWrapper m-2 p-2 bg-white rounded-md shadow-lg">
            <h3 class="m-0">{{ post.title }}</h3>
            <div class="tagWrapper">
              <span v-for="tag in post.tags" :key="tag" class="">
                <nuxt-link
                  :to="`/tags/${tag}`"
                  class="bg-green-200 mt-2 mr-3 p-1 rounded-md"
                  >#{{ tag }}
                </nuxt-link>
              </span>
            </div>
            <p class="text-xs mt-2 m-0">♻️ {{ formatDate(post.updatedAt) }}</p>
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
      ])
      .limit(5)
      .sortBy('updatedAt', 'desc')
      .fetch();

    return {
      posts,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-GB', options);
    },
  },
};
</script>

<style scoped>
.headingCard {
  background-color: #505d8c;
  clip-path: polygon(100% 0%, 93% 51%, 100% 100%, 0 100%, 0% 50%, 0 0);
}

.subheadingCard {
  background-color: #505d8c;
  clip-path: polygon(100% 0%, 93% 51%, 100% 100%, 0 100%, 0% 50%, 0 0);
}
</style>
