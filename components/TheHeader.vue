<template>
  <header
    class="sticky inset-0 z-10 flex items-center h-16 bg-blue-800 shadow-sm text-buttermilk"
  >
    <nav class="grid items-center w-full grid-cols-6 px-4">
      <nuxt-link class="self-center col-start-1 col-end-3 lg:col-end-2" to="/"
        ><img class="w-40" src="dante-wiki.png"
      /></nuxt-link>
      <div
        class="inline-flex items-center self-center justify-center col-start-3 col-end-6 lg:col-start-2 lg:col-end-4"
      >
        <Search class="mr-4" />
        <SearchInput />
      </div>
      <div class="w-0 lg:col-start-5 lg:col-end-6">
        <div @click="menuOpen = !menuOpen">
          <button
            v-if="menuOpen"
            aria-label="Open menu."
            class="absolute w-7 h-7 top-4 right-5"
          >
            <Hamburger class="hover:animate-pulse" />
          </button>
          <button
            v-else
            aria-label="Close menu."
            class="absolute w-7 h-7 top-4 right-5"
          >
            <Close class="hover:animate-pulse" />
          </button>
        </div>
        <transition
          enter-active-class="duration-300 ease-out opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="duration-200 ease-in"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-show="menuOpen">
            <Menu />
          </div>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script>
import Close from '~/components/icons/Close.vue';
import Hamburger from '~/components/icons/Hamburger.vue';
import Menu from '~/components/Menu.vue';
import Search from '~/components/icons/Search.vue';

export default {
  components: {
    Close,
    Hamburger,
    Menu,
    Search,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  mounted() {},
  methods: {
    toggleClass: function (event) {
      this.active = !this.active;
    },
  },
  watch: {
    $route() {
      this.menuOpen = false;
    },
  },
};
</script>
