<template>
  <div v-editable="blok" class="topicWrapper">
    {{ blok.tag }}
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },

  mounted() {},
};
</script>
