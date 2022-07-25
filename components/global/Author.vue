<template>
  <div>
    <div class="flex flex-row text-sm authorWrapper">
      <p class="text-indigo-800">Author: {{ author.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
};
</script>
