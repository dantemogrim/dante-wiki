<template>
  <div class="container">
    <h1
      v-if="error.statusCode === 404"
      class="m-4 text-6xl text-black font-megaMan font-extrabold"
    >
      404 - Page not found.
    </h1>
    <h1 v-else class="m-4 text-6xl text-black font-megaMan font-extrabold">
      An error occurred
    </h1>
    <NuxtLink to="/">Go to home page.</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'], // you can set a custom layout for the error page
};
</script>
