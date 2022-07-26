<template>
  <div class="inline-flex items-center tag font-jetbrainsmono">
    <div :class="`bg-${tag.color}`" class="w-3 h-3 mt-0.5 rounded-full" />
    <p class="ml-1 first:ml-0" v-html="tag.name" />
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      required: true,
    },
  },
};
</script>
