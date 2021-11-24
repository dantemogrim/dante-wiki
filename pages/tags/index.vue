<template>
  <div class="md:m-4">
    <Heading>All Tags</Heading>
    <ul
      class="
        m-0
        list-none
        flex flex-col
        justify-center
        md:my-3 md:grid md:grid-flow-row md:grid-cols-3 md:grid-rows-8 md:gap-4
      "
    >
      <li v-for="tag of tags" :key="tag.slug">
        <nuxt-link :to="{ name: 'tags-slug', params: { slug: tag.slug } }">
          <div
            class="
              flex flex-col
              justify-center
              h-full
              tagWrapper
              m-2
              p-2
              bg-gray-50
              rounded-md
              shadow-lg
              transition
              duration-300
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-101
            "
          >
            <h3 class="m-0">{{ tag.emoji }} #{{ tag.name }}</h3>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tags = await $content('tags', params.slug)
      .only(['name', 'emoji', 'slug'])
      .sortBy('name', 'asc')
      .fetch();

    return {
      tags,
    };
  },

  head: {
    title: 'Tags',
  },
};
</script>
