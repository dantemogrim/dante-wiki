<template>
  <div class="headingCard mt-4 mx-2 p-3 shadow-lg">
    <h1 class="text-white"><slot>Title</slot></h1>
    <p class="text-white" v-if="$nuxt.isOffline">Oops! You're offline. 😱</p>
  </div>
</template>
