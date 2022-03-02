<template>
  <div
    class="absolute left-0 inline-flex flex-col w-screen pt-5 uppercase bg-white shadow-md lg:shadow-none h-min lg:justify-between lg:w-96 lg:pt-0 lg:bg-transparent lg:text-black w-fit lg:static top-12 lg:flex-row"
  >
    <NuxtLink
      class="p-6 lg:self-center lg:p-0 hover:bg-indigo-100 lg:hover:bg-transparent font-cartridge"
      to="/about"
      >About</NuxtLink
    >
    <NuxtLink
      class="p-6 lg:self-center lg:p-0 hover:bg-indigo-100 lg:hover:bg-transparent font-cartridge"
      to="/posts"
      >Posts</NuxtLink
    >
    <NuxtLink
      class="p-6 lg:self-center lg:p-0 hover:bg-indigo-100 lg:hover:bg-transparent font-cartridge"
      to="/tags"
      >Tags</NuxtLink
    >
  </div>
</template>
