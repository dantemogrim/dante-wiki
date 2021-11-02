<template>
  <div v-editable="blok" class="articleWrapper">
    <section class="bg-gray-50 p-4 rounded-md shadow-lg m-2">
      <div class="flex flex-col justify-center items-center w-full">
        <img class="h-48 w-3/4 mb-4 object-cover" :src="blok.image.filename" />
        <h1 class="m-3">
          {{ blok.title }}
        </h1>
      </div>

      <p class="text-m mb-3 text-green-500">{{ blok.tag }}</p>
      <p class="text-m mb-3 text-blue-500">{{ blok.author }}</p>
      <p class="text-m mb-3 text-indigo-500">{{ blok.date }}</p>
      <hr />
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
