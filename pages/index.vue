<template>
  <div class="md:m-4">
    <Heading>Hi, I'm Dante Mogrim</Heading>
    <div class="flex justify-center">
      <img
        class="mt-3"
        src="/selfie.png"
        alt="An illustration of me peeking up and smiling."
      />
    </div>
    <article class="bg-green-100 flex flex-col p-4 rounded-md shadow-lg m-2">
      <p class="m-1">
        I am a web developer student living in Gothenburg, Sweden. Welcome to my
        personal wikipedia of web development findings.
      </p>
    </article>
    <Subheading>Featured</Subheading>

    <ul
      class="
        m-0
        list-none
        sm:flex sm:flex-col sm:justify-center
        md:my-3 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-3 md:gap-4
      "
    >
      <li v-for="post of posts" :key="post.slug">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
          <div
            class="
              m-2
              mt-3
              h-full
              p-2
              bg-gray-50
              rounded-md
              shadow-lg
              transition
              duration-300
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-101
              flex flex-col
              justify-between
            "
          >
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
    const posts = await $content('posts')
      .only(['title', 'slug', 'tags', 'updatedAt'])
      .sortBy('updatedAt', 'desc')
      .limit(6)
      .fetch();

    return {
      posts,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      date = new Date(date).toLocaleDateString('en-GB', options);
      return date.valueOf();
    },
  },
};
</script>
