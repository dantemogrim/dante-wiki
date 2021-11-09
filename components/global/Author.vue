<template>
  <div>
    <div class="authorWrapper flex flex-row">
      <p class="text-green-600">Author: {{ author.name }}</p>
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
