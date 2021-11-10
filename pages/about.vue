<template>
  <div>
    <div class="headline-card text-center p-3">
      <h1 class="">About</h1>
      <p v-if="$nuxt.isOffline">Oops! You are offline. 😱</p>
    </div>
  </div>
</template>

<style scoped>
.headline-card {
  background-color: #f8fad3;
  clip-path: polygon(4% 5%, 96% 8%, 97% 94%, 3% 94%);
}
</style>
