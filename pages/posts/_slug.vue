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
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>

      <div class="tagWrapper">
        <span> Tags: </span>
        <span v-for="tag in post.tags" :key="tag" class="">
          <nuxt-link
            :to="`/tags/${tag}`"
            class="bg-green-200 m-2 p-1 rounded-md"
            >{{ tag }}
          </nuxt-link>
        </span>
      </div>

      <author :author="post.author" />

      <div class="bg-blue-100 rounded-md p-2">
        <p>✏️ Created @ {{ formatDate(post.createdAt) }}</p>
        <p>♻️ Updated @ {{ formatDate(post.updatedAt) }}</p>
      </div>

      <!-- Heading index so the user can click to next heading. -->
      <!-- <nav class="bg-red-100">
        <ul>
          <li>Index:</li>
          <li v-for="link of post.toc" :key="link.id">
            <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
          </li>
        </ul>
      </nav> -->
      <hr />
      <nuxt-content :document="post" />

      <prev-next :prev="prev" :next="next" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch();

    const [prev, next] = await $content('posts')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch();

    return {
      post,

      prev,
      next,
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
