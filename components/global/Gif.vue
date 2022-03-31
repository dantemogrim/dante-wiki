<template>
  <!-- TODO -->
  <div
    class="grid items-center grid-cols-1 grid-rows-1 overflow-hidden md:mt-5 md:flex gifWrapper md:min-h-[25rem] max-h-128 justify-center"
  >
    <div
      class="max-w-3xl col-start-1 col-end-1 row-start-1 row-end-1 overflow-hidden w-fit md:shadow-md md:rounded-md h-96 bg-blue-link"
    >
      <img
        class="min-w-[100%] h-full opacity-70"
        :src="gif.src"
        :alt="gif.alt"
      />
    </div>
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
