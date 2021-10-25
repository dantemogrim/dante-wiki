<template>
  <div v-editable="blok" class="prose my-24 mx-auto">
    <section class="bg-gray-50 p-4 rounded-md shadow-lg font-hack">
      <h1 class="text-4xl mb-3 font-vinsonBold">{{ blok.name }}</h1>
      <p class="text-2xl mb-3">{{ blok.intro }}</p>
      <rich-text-renderer :document="blok.body" />
    </section>
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
};
</script>
