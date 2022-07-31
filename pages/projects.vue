<template>
  <div>
    <Heading>Projects</Heading>
    <div class="grid-flow-row grid-cols-2 gap-4 sm:grid">
      <div
        v-for="project of projects"
        :key="project.slug"
        class="flex flex-col col-span-1 p-4 my-4 transition duration-300 ease-in-out transform sm:my-0 pixelFrame md:my-0 hover:-translate-y-1 hover:scale-101"
      >
        <h3
          class="mb-3 text-xl uppercase"
          v-html="`${project.emoji} ${project.name} ${project.emoji}`"
        />
        <div class="grid h-5 grid-cols-4">
          <ul class="inline-flex w-full col-start-1 col-end-4">
            <li
              class="inline-flex items-center mr-1 text-sm w-fit"
              v-for="utility of project.utilities"
              :key="utility.id"
            >
              <div
                :class="`bg-${utility.color}`"
                class="w-2 h-2 mr-1 rounded-full shadow-md"
              />
              <p class="text-xs tracking-wider" v-html="utility.name" />
            </li>
          </ul>
          <ul
            class="inline-flex col-start-4 col-end-4 overflow-hidden justify-self-end"
          >
            <li
              v-for="link of project.links"
              :key="link.id"
              class="ml-2 first:ml-0"
            >
              <a :href="link.url" target="_blank" :aria-label="link.aria"
                ><img
                  :alt="link.aria"
                  class="w-5 h-5"
                  :src="`icons/${link.icon}`"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subheading from '~/components/Subheading.vue';

export default {
  components: {
    Subheading,
  },
  data() {},
  props: {},
  mounted() {},

  async asyncData({ $content, params }) {
    const projects = await $content('projects')
      .sortBy('name', 'asc')
      .limit(6)
      .fetch();

    return {
      projects,
    };
  },
};
</script>
