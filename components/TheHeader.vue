<template>
  <header class="z-10 min-w-full h-16 sticky inset-0">
    <nav class="flex flex-row justify-between items-center h-full">
      <div class="headerMenu1 mx-2">
        <nuxt-link to="/">
          <p class="brand whitespace-nowrap">🤷‍♂️ dante.wiki</p>
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

export default Vue.extend({
  data() {
    return {};
  },
});
</script>
