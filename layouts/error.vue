<template>
  <div
    class="
      flex
      justify-center
      flex-col
      items-center
      min-h-screen
      overflow-y-hidden
    "
  >
    <h1 v-if="error.statusCode === 404" class="mb-4 text-9xl">404</h1>
    <h2 v-if="error.statusCode === 404" class="mb-4">😔 Page not found. 😔</h2>
    <h1 v-else>😔 An error occurred. 😔</h1>
    <NuxtLink
      class="
        mt-4
        bg-indigo-500
        p-3
        rounded-lg
        text-white
        transition
        duration-300
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-105
      "
      to="/"
      >Go to Home</NuxtLink
    >
  </div>
</template>

<script>
export default {
  props: ['error'], // you can set a custom layout for the error page
};
</script>
