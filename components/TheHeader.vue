<template>
  <header class="z-10 min-w-full h-16 sticky inset-0">
    <nav class="flex flex-row justify-between items-center h-full">
      <div class="headerMenu1 mx-2">
        <nuxt-link class="flex items-center" to="/">
          <img
            class="brand mx-2"
            src="/dante-wiki.png"
            alt="dante.wiki in hand writing."
          />
        </nuxt-link>
      </div>
      <div class="headerMenu2">
        <SearchInput />
      </div>
      <div class="headerMenu3 mx-2">
        <Dropdown />
      </div>
    </nav>
  </header>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>
