<template>
  <div>
    <article
      class="tagWrapper bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2"
    >
      <div class="bg-green-200 mr-2 p-1 rounded-md">
        <h1>{{ tag.emoji }} #{{ tag.name }}</h1>
      </div>
      <p>{{ tag.description }}</p>
      <hr />
      <div class="bg-img text-white p-3"></div>
    </article>
    <div class="headingCard mt-6 mx-2 p-3">
      <h2 class="text-white">Related Posts</h2>
    </div>
    <ul class="m-0 list-none flex flex-col">
      <li v-for="post of tenPosts" :key="post.slug">
        <nuxt-link
          :to="{
            name: 'posts-slug',
            params: { slug: post.slug },
          }"
        >
          <div
            class="
              m-2
              p-2
              bg-white
              rounded-md
              shadow-lg
              transition
              duration-300
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-101
            "
          >
            <h3 class="m-0">{{ post.title }}</h3>
            <div class="flex text-center items-center">
              <span v-for="tag in post.tags" :key="tag" class="">
                <div class="flex text-center">
                  <nuxt-link
                    :to="`/tags/${tag}`"
                    class="bg-green-200 mr-2 p-1 rounded-md"
                    >#{{ tag }}
                  </nuxt-link>
                </div>
              </span>
            </div>
            <small>✏️ {{ formatDate(post.updatedAt) }}</small>
          </div>
        </nuxt-link>
      </li>
    </ul>
    <section id="next" v-if="nextPage" class="flex">
      <nuxt-link
        :to="`/tags/${tag.name}/page/2`"
        class="
          m-2
          bg-skunkblue
          text-white
          p-2
          rounded-lg
          transition
          duration-300
          ease-in-out
          transform
          hover:-translate-y-1 hover:scale-105
        "
        >Next page 👉</nuxt-link
      >
    </section>
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta';

export default {
  async asyncData({ $content, params }) {
    const tag = await $content('tags', params.slug).fetch();

    const tenPosts = await $content('posts')
      .only(['title', 'slug', 'updatedAt', 'tags'])
      .where({
        tags: { $contains: params.slug },
      })
      .sortBy('createdAt', 'desc')
      .limit(10)
      .fetch();

    const nextPage = tenPosts.length === 10;
    const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts;

    return {
      nextPage,
      tag,
      tenPosts,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-GB', options);
    },
  },

  computed: {
    meta() {
      const metaData = {
        type: 'tag',
        title: this.tag.name,
        description: this.tag.description,
        url: `${this.$config.baseUrl}/tags/${this.$route.params.slug}`,
      };
      return getSiteMeta(metaData);
    },
  },

  head() {
    return {
      title: this.tag.name,
      meta: [
        ...this.meta,
        { name: 'twitter:label1', content: 'Author:' },
        { name: 'twitter:data1', content: 'Dante Mogrim' },
        { name: 'twitter:label2', content: 'Filed under:' },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://dante.wiki/tags/${this.$route.params.slug}`,
        },
      ],
    };
  },
};
</script>
