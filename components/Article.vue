<template>
  <div v-editable="blok" class="">
    <div class="">
      <img
        class="h-48 w-full mb-4 object-cover opacity-25"
        :src="blok.image.filename"
      />
      <h1 class="text-4xl m-3 font-vinsonBold">{{ blok.title }}</h1>
      <p class="text-2xl mb-3">{{ blok.description }}</p>
    </div>
    <section class="bg-gray-50 p-4 rounded-md shadow-lg font-hack">
      <p class="text-l mb-3">{{ blok.date }}</p>
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
