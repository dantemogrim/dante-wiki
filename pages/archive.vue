<template>
  <div class="archive-page">
    <h1 class="m-4 text-6xl text-black font-megaMan font-extrabold">
      {{ page }}
    </h1>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      page: 'Archive',
    };
  },
};
</script>
