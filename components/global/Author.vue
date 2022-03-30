<template>
  <div>
    <div class="flex flex-row authorWrapper">
      <p class="text-indigo-800">Author: {{ author.name }}</p>
      <!-- <p>{{ author.emoji }}</p> -->
      <!-- <p>{{ author.bio }}</p> -->
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
