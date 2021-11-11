<template>
  <div class="gifWrapper w-full h-64 flex justify-center mb-4">
    <img class="object-cover" :src="`${gif.src}`" :alt="`${gif.alt}`" />
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
