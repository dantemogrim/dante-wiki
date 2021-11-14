<template>
  <div>
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
      <gif :gif="post.gif" />
      <h1 class="mb-4">{{ post.title }}</h1>
      <p class="mb-3">{{ post.description }}</p>
      <div class="tagWrapper mb-3">
        <span> Tags: </span>
        <span v-for="tag in post.tags" :key="tag" class="">
          <nuxt-link
            :to="`/tags/${tag}`"
            class="bg-green-200 m-2 p-1 rounded-md"
            >#{{ tag }}
          </nuxt-link>
        </span>
      </div>
      <author class="mb-4" :author="post.author" />
      <div class="bg-blue-100 rounded-md mb-4 p-2">
        <p>✏️ Created @ {{ formatDate(post.createdAt) }}</p>
        <p>♻️ Updated @ {{ formatDate(post.updatedAt) }}</p>
      </div>
      <hr />
      <!-- TOC - Table of Contents -->
      <nav class="bg-indigo-100 rounded-2xl p-3 w-2/3">
        <p class="m-0 font-bold">Table of Contents:</p>
        <ul>
          <li v-for="link of post.toc" :key="link.id">
            <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <nuxt-content :document="post" />
      <previous-next-post :previousPost="previousPost" :nextPost="nextPost" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch();

    const [previousPost, nextPost] = await $content('posts')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch();

    return {
      post,
      previousPost,
      nextPost,
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
