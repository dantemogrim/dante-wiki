<template>
  <div v-editable="blok" class="articleWrapper">
    <div class="">
      <img
        class="h-48 w-full mb-4 object-cover opacity-25"
        :src="blok.image.filename"
      />
      <h1 class="text-4xl m-3 font-megaMan font-extrabold">{{ blok.title }}</h1>
    </div>
    <section class="bg-gray-50 p-4 rounded-md shadow-lg font-hack">
      <p class="text-l mb-3">{{ blok.date }}</p>
      <p class="text-l mb-3">{{ blok.author }}</p>
      <div v-html="$md.render(blok.bodyText)" class=""></div>
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
  mounted() {},
};
</script>
