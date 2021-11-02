<template>
  <div class="about-page">
    <h1 class="m-4">
      {{ page }}
    </h1>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      page: 'About',
    };
  },
};
</script>
