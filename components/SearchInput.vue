<template>
  <div class="font-cartridge">
    <input
      @click="inputIsOpen = !inputIsOpen"
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      class="z-10 block w-24 p-2 leading-5 text-blue-800 truncate transition-colors duration-300 bg-blue-600 rounded-md h-7 sm:w-60 focus:bg-blue-200"
      aria-label="Search for posts."
    />

    <div v-if="inputIsOpen">
      <transition name="fade">
        <ul
          @click="inputIsOpen = false"
          v-if="posts.length"
          class="absolute z-10 flex-1 w-auto overflow-hidden bg-blue-800 rounded-b top-15 text-buttermilk"
        >
          <li v-for="post of posts" :key="post.slug">
            <nuxt-link
              :to="{ name: 'posts-slug', params: { slug: post.slug } }"
              class="flex items-center px-4 py-2 leading-5 transition duration-100 ease-in-out hover:bg-blue-700"
            >
              {{ post.title }}
            </nuxt-link>
          </li>
        </ul>
      </transition>
    </div>
    <button
      v-if="inputIsOpen"
      @click="inputIsOpen = false"
      class="fixed inset-0 w-full h-full cursor-default"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputIsOpen: false,
      searchQuery: '',
      posts: [],
    };
  },

  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.posts = [];
        return;
      }
      this.posts = await this.$content('posts')
        .only(['title', 'slug', 'tags'])
        .limit(6)
        .search(searchQuery)
        .fetch();
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
