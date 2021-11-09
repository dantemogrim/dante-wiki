<template>
  <div
    class="headline-card flex justify-center text-center items-center p-3 m-3"
  >
    <h1 class="">Welcome</h1>
    <p v-if="$nuxt.isOffline">Oops! You are offline. 😱</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headline-card {
  background-color: #cedaf0;
  clip-path: polygon(4% 5%, 96% 8%, 97% 94%, 3% 94%);
}
</style>
