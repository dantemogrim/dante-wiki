<template>
  <div>
    <input
      @click="inputIsOpen = !inputIsOpen"
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="🔎 Search 4 posts."
      class="
        relative
        z-10
        block
        w-full
        p-2
        truncate
        leading-5
        placeholder-gray-500
        text-gray-700
        focus:ring-blue-500
        rounded-md
        focus:bg-white
        transition
        duration-300
        transition-colors
        bg-gray-100
      "
    />

    <div v-if="inputIsOpen">
      <transition name="fade">
        <ul
          @click="inputIsOpen = false"
          v-if="posts.length"
          class="
            z-10
            absolute
            w-auto
            flex-1
            top-15
            bg-white
            dark:bg-gray-900
            rounded-md
            border border-gray-300
            overflow-hidden
          "
        >
          <li v-for="post of posts" :key="post.slug">
            <nuxt-link
              :to="{ name: 'posts-slug', params: { slug: post.slug } }"
              class="
                flex
                px-4
                py-2
                items-center
                leading-5
                transition
                ease-in-out
                duration-100
                hover:bg-skunkdarkpurple hover:text-white
              "
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
      class="cursor-default fixed inset-0 h-full w-full bg-black opacity-50"
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
