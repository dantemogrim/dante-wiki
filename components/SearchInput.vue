<template>
  <div>
    <input
      @click="isOpen = !isOpen"
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
        border border-gray-500
        text-gray-700
        focus:border-blue-500
        rounded-md
        focus:outline-none focus:bg-white
        bg-white
      "
    />

    <transition name="fade">
      <div v-if="isOpen" class="itemsWrapper">
        <ul
          @click="isOpen = false"
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
                duration-150
                text-blue-500
                hover:bg-indigo-500 hover:text-white
              "
            >
              {{ post.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      class="cursor-default fixed inset-0 h-full w-full bg-black opacity-50"
    ></button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
