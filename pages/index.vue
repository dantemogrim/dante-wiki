<template>
  <div>
    <div
      class="headline-card flex justify-center text-center items-center p-3 m-3"
    >
      <h1 class="">Welcome</h1>
      <p v-if="$nuxt.isOffline">Oops! You are offline. 😱</p>
    </div>
    <article
      class="
        articleWrapper
        bg-gray-50
        flex flex-col
        p-4
        rounded-md
        shadow-lg
        m-2
      "
    >
      <p>
        Increase the resolution, scale it up we need a larger print workflow
        ecosystem, we don't need to boil the ocean here market-facing. I know
        you're busy throughput curate pixel pushing, yet core competencies.
      </p>
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headline-card {
  background-color: #b3dac3;
  clip-path: polygon(4% 5%, 96% 8%, 97% 94%, 3% 94%);
}
</style>
