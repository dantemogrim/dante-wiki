<template>
  <div>
    <h1 class="m-4 text-6xl text-black font-vinsonRegular">
      {{ greeting }}
    </h1>
    <article class="bg-gray-50 m-2 p-2 rounded-md shadow-lg">
      <p class="font-hack">{{ message }}</p>
    </article>
    <h2 class="m-4 text-3xl text-black font-vinsonRegular">Latest</h2>
    <article class="bg-gray-50 m-2 p-2 rounded-md shadow-lg"></article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      message:
        'Cupcake cookie liquorice sweet halvah bonbon jelly biscuit marzipan.',
      greeting: 'Hello, im.dante',
    };
  },
});
</script>
