<template>
  <div>
    <div class="bg-img smt-4 mx-2 p-3">
      <h1 class="text-white">Hi, I'm Dante Mogrim.</h1>
      <p v-if="$nuxt.isOffline">Oops! You're offline. 😱</p>
    </div>
    <div class="flex justify-center">
      <img
        class="mt-3"
        src="/selfie.png"
        alt="An illustration of me peeking up and smiling."
      />
    </div>
    <article class="bg-white flex flex-col p-4 rounded-md shadow-lg m-2">
      <p class="m-1">
        I am a web developer student living in Gothenburg, Sweden. Welcome to my
        digital garden where I’ll be sharing all kinds of findings.
      </p>
      <p class="m-1">
        This project is both a personal + open source notebook. A collection of
        notes that will grow over time, accessible for anyone to take part of a
        wide range of useful, comprehensive information.
      </p>
    </article>
    <div class="bg-img mt-6 mx-2 p-3">
      <h2 class="text-white">Latest</h2>
    </div>
    <ul class="m-0 list-none flex flex-col justify-center">
      <li v-for="post of posts" :key="post.slug">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
          <div class="articleWrapper m-2 p-2 bg-white rounded-md shadow-lg">
            <h3 class="mb-1 m-0">{{ post.title }}</h3>
            <div class="tagWrapper mb-1">
              <span v-for="tag in post.tags" :key="tag" class="">
                <nuxt-link
                  :to="`/tags/${tag}`"
                  class="bg-green-200 mt-2 mr-3 p-1 rounded-md"
                  >#{{ tag }}
                </nuxt-link>
              </span>
            </div>
            <p class="text-xs mt-2 m-0">✏️ {{ formatDate(post.updatedAt) }}</p>
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
