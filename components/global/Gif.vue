<template>
  <div class="gifWrapper w-full h-64 flex justify-center mb-4">
    <transition name="fade">
      <img
        class="object-cover rounded-lg"
        :src="`${gif.src}`"
        :alt="`${gif.alt}`"
      />
    </transition>
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
