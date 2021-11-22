<template>
  <div class="gifWrapper w-full h-64 h-auto flex justify-center mb-4">
    <img
      class="w-full max-w-3xl rounded-lg h-auto"
      :src="`${gif.src}`"
      :alt="`${gif.alt}`"
    />
  </div>
</template>

<script>
export default {
  props: {
    gif: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
