<template>
  <div>
    <article
      class="tagWrapper bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2"
    >
      <h1>{{ tag.emoji }} #{{ tag.name }}</h1>
      <p>{{ tag.description }}</p>
      <hr />

      <h2>Related posts:</h2>

      <ul class="articleCardWrapper flex flex-col justify-center">
        <li v-for="post of posts" :key="post.slug">
          <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
            <div class="articleWrapper m-2 p-2 bg-red-100 rounded-md">
              <img :src="post.img" />
              <h3>{{ post.title }}</h3>

              <p>Author: {{ post.author.name }}</p>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tag = await $content('tags', params.slug).fetch();

    // const posts = await $content('posts', params.slug)
    //   .only(['title', 'description', 'img', 'slug', 'author', 'tags'])
    //   .sortBy('createdAt', 'asc')
    //   .fetch();

    const posts = await $content('posts')
      .where({
        tags: { $contains: params.slug },
      })
      .fetch();

    return {
      tag,
      posts,
    };
  },
};
</script>
