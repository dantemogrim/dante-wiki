<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen overflow-y-hidden tracking-widest uppercase font-cartridge"
  >
    <h1 v-if="error.statusCode === 404" class="mb-4 text-9xl">404</h1>
    <h2 v-if="error.statusCode === 404" class="mb-4">Page not found</h2>
    <h1 v-else>😔 An error occurred. 😔</h1>
    <div class="inline-flex flex-col">
      <button
        class="p-3 mt-4 uppercase transition duration-300 ease-in-out transform rounded-full bg-sky-300 hover:-translate-y-1 hover:scale-103"
        @click="goBack()"
      >
        Back to where you were
      </button>
      <NuxtLink
        class="p-3 mt-4 text-center transition duration-300 ease-in-out transform bg-indigo-300 rounded-full hover:-translate-y-1 hover:scale-103"
        to="/"
        >Back to home</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'], // you can set a custom layout for the error page
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>
