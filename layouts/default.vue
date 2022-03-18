<template>
  <div class="grid min-h-screen grid-cols-11 bg-fixed bg-gray-200">
    <TheHeader class="col-span-full" />
    <div
      class="items-center min-h-screen overflow-y-hidden col-span-full"
      v-if="$nuxt.isOffline"
    >
      <h2
        class="w-48 text-6xl font-bold uppercase text-slate-600 justify-self-center col-span-full font-cartridge"
      >
        Uh, oh! 😔 You're offline.
      </h2>
    </div>
    <main v-else class="w-full col-span-full md:col-start-2 md:col-end-11">
      <Nuxt />
    </main>
    <TheFooter class="col-span-full" />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue';
import TheFooter from '~/components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
