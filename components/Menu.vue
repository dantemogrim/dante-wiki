<template>
  <div
    class="absolute left-0 z-10 inline-flex flex-col w-full text-xl tracking-widest bg-blue-800 border-t-2 border-blue-500 shadow-md lg:border-none lg:shadow-none h-min lg:justify-between lg:pt-0 lg:bg-transparent lg:w-60 lg:text-buttermilk lg:static top-15 lg:flex-row"
  >
    <NuxtLink
      class="p-4 border-b-2 border-blue-500 lg:border-none lg:self-center lg:p-0 hover:bg-blue-600 lg:hover:bg-transparent font-cartridge"
      to="/about"
      >About</NuxtLink
    >
    <NuxtLink
      class="p-4 lg:self-center lg:p-0 hover:bg-blue-600 lg:hover:bg-transparent font-cartridge"
      to="/posts"
      >Posts</NuxtLink
    >
    <NuxtLink
      class="p-4 border-t-2 border-blue-500 lg:border-none lg:self-center lg:p-0 hover:bg-blue-600 lg:hover:bg-transparent font-cartridge"
      to="/tags"
      >Tags</NuxtLink
    >
  </div>
</template>

<style scoped>
.nuxt-link-exact-active::after {
  content: ' 📍';
}
</style>
