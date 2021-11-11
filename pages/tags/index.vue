<template>
  <div>
    <div class="headline-card text-center p-3">
      <h1 class="">All Tags</h1>
      <p v-if="$nuxt.isOffline">Oops! You are offline. 😱</p>
    </div>
    <ul class="tagCardWrapper flex flex-col justify-center">
      <li v-for="tag of tags" :key="tag.slug">
        <nuxt-link :to="{ name: 'tags-slug', params: { slug: tag.slug } }">
          <div class="tagWrapper m-2 p-2 bg-green-100 rounded-md">
            <h3>{{ tag.emoji }} #{{ tag.name }}</h3>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tags = await $content('tags', params.slug)
      .only(['name', 'description', 'emoji', 'slug'])
      .sortBy('name', 'asc')
      .fetch();

    return {
      tags,
    };
  },
};
</script>

<style scoped>
.headline-card {
  background-color: #f0dcc6;
  clip-path: polygon(4% 5%, 96% 8%, 97% 94%, 3% 94%);
}
</style>
