<template>
  <header class="sticky inset-0 z-10 h-16 min-w-full glassmorphism">
    <nav class="grid items-center w-full h-full grid-cols-6 px-4">
      <nuxt-link
        class="self-center col-start-1 col-end-3 mr-5 text-3xl lg:col-end-2 font-cartridge"
        to="/"
        >dante.wiki</nuxt-link
      >
      <SearchInput
        class="self-center col-start-4 col-end-6 lg:col-start-2 lg:col-end-3"
      />
      <div class="w-0 lg:col-start-4 lg:col-end-6">
        <div @click="menuOpen = !menuOpen">
          <button v-if="menuOpen" class="absolute w-7 h-7 top-4 right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button v-else class="absolute w-7 h-7 top-4 right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
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
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  mounted() {
    let width = window.innerWidth;
    console.log(width);

    // if (width > 500) {
    //   return (this.active = true);
    // }
  },
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
