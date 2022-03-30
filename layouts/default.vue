<template>
  <div class="grid min-h-screen grid-cols-11 bg-gray-100">
    <TheHeader class="col-span-full" />
    <div
      class="inline-flex items-center justify-center min-h-screen overflow-y-hidden justify-self-center col-span-full"
      v-if="$nuxt.isOffline"
    >
      <h2
        class="pl-10 text-6xl font-bold uppercase md:pl-0 md:max-w-lg text-slate-600 font-cartridge"
      >
        Uh, oh! 😔 You're offline.
      </h2>
    </div>
    <main
      v-else
      class="max-w-5xl md:min-w-[36rem] lg:min-w-[50rem] justify-self-center col-span-full md:col-start-2 md:col-end-11"
    >
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
