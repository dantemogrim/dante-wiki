<template>
  <div class="md:m-4">
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
 <Subheading>Related Posts</Subheading>
    <p class="ml-2 text-skunkblue">// Ordered by last updated.</p>
    <ul class="m-0 list-none flex flex-col md:my-3 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-5 md:gap-4
    ">
      <li v-for="post of tenPosts" :key="post.slug">
        <nuxt-link
          :to="{
            name: 'posts-slug',
            params: { slug: post.slug },
          }"
        >
          <div class="h-full m-2 p-2 bg-gray-50 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 flex flex-col justify-between">
            <h3 class="m-0">{{ post.title }}</h3>
            <div class="flex text-center items-center">
              <span v-for="tag in post.tags" :key="tag">
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

<section id="prev-next" class="flex justify-between items-center">
  <nuxt-link :to="previousLink" class="m-2 bg-skunkblue text-white p-2 rounded-lg         transition
        duration-300
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-105 shadow
          hover:shadow-sm">👈 Previous page</nuxt-link>
  <nuxt-link v-if="nextPage" :to="`${pageNumber + 1}`" class="m-2 bg-skunkblue text-white p-2 rounded-lg         transition
        duration-300
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-105 shadow-lg
          hover:shadow-md">Next page 👉</nuxt-link>
</section>

    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    // An object!
    const tag = await $content('tags', params.slug).fetch();

    const pageNumber = parseInt(params.number);

    const tenPosts = await $content('posts')
      .only(['title', 'slug', 'updatedAt', 'tags'])
      .where({
        tags: { $contains: tag.slug },
      })
      .sortBy('createdAt', 'desc')
      .limit(10)
      .skip(10 * (pageNumber - 1))
      .fetch();

      if (!tenPosts.length) {
      return error({ statusCode: 404, message: 'No posts found!' });
    }

    const nextPage = tenPosts.length === 10;
    const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts;

    return {
      nextPage,
      tag,
      tenPosts,
      pageNumber,
    };
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-GB', options);
    },
  },
   computed: {
    previousLink() {
      return this.pageNumber === 2 ? `/tags/${this.tag.slug}` : `/tags/${this.tag.slug}/page/${this.pageNumber - 1}`;
    },
  },
};
</script>
