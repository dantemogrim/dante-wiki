<template>
  <div
    class="flex flex-row items-center justify-center w-full mb-4 overflow-hidden rounded-md max-h-80 md:max-h-128 gifWrapper"
  >
    <img class="w-full h-auto" :src="`${gif.src}`" :alt="`${gif.alt}`" />
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
