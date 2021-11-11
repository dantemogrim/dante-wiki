<template>
  <div>
    <div class="headingCard mt-4 mx-2 p-3">
      <h1 class="">All Tags</h1>
      <p v-if="$nuxt.isOffline">Oops! You are offline. 😱</p>
    </div>
    <ul class="tagCardWrapper m-0 list-none flex flex-col justify-center">
      <li v-for="tag of tags" :key="tag.slug">
        <nuxt-link :to="{ name: 'tags-slug', params: { slug: tag.slug } }">
          <div class="tagWrapper m-2 p-2 bg-green-100 rounded-md">
            <h3 class="m-0">{{ tag.emoji }} #{{ tag.name }}</h3>
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
.headingCard {
  background-color: #f0dcc6;
  clip-path: polygon(100% 0%, 93% 51%, 100% 100%, 0 100%, 0% 50%, 0 0);
}
</style>
