<template>
  <div>
    <Heading>Projects</Heading>
    <div v-for="project of projects" :key="project.slug">
      <div
        :class="project.colors.bg"
        class="flex justify-between w-full h-full m-3 rounded-md shadow-md cardWrapper"
      >
        <div class="flex flex-col items-center 1/3 md:flex-row">
          <div
            class="flex flex-col items-center p-3 overflow-hidden h-96 pattern"
          >
            <div class="inline-flex justify-between w-full my-5">
              <p class="px-3" v-html="project.emoji" />
              <p
                :class="project.colors.text"
                class="text-3xl uppercase font-cartridge ligatures"
                v-html="project.name"
              />
              <p class="px-3" v-html="project.emoji" />
            </div>
            <img
              :class="project.colors.border"
              class="border-4 rounded-md h-2/3 aspect-video opacity-70"
              :src="project.gif.src"
              :alt="project.gif.alt"
            />
          </div>
          <div class="w-2/3 font-jetbrains-mono text-buttermilk">
            <ul>
              <li class="mb-2">
                <span class="font-semibold">Description:</span>
                {{ project.description }}
              </li>
              <li class="mb-2">
                <span class="font-semibold">Languages:</span>
                <div v-for="language of project.languages" :key="language">
                  <span v-html="language" />
                </div>
              </li>
              <li class="mb-2">
                <span class="font-semibold">Links:</span>
                <div v-for="link of project.links" :key="link">
                  <a :href="link.url" target="_blank">{{ link.title }}</a>
                </div>
              </li>
              <li class="mb-2">
                <span class="font-semibold">Tools:</span>
                <div v-for="tool of project.tools" :key="tool">
                  {{ tool }}
                </div>
              </li>
              <li class="mb-2">
                <span class="font-semibold">Type:</span>
                {{ project.type }}
              </li>
            </ul>
          </div>
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
