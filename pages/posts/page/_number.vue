<template>
  <div>
       <div class="headingCard mt-4 mx-2 p-3">
      <h1 class="text-white">All Posts {{`🔖 Page ${pageNumber}`}}</h1>
      <p v-if="$nuxt.isOffline">Oops! You're offline. 😱</p>
    </div>
    <ul class="m-0 list-none flex flex-col justify-center
    md:my-3 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-5 md:gap-4
    ">
      <li v-for="post of tenPosts" :key="post.slug">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
          <div class="m-2 p-2 bg-white rounded-md shadow-lg               transition
              duration-300
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-101">
            <img :src="post.img" />
            <h3 class="m-0">{{ post.title }}</h3>

            <div class="tagWrapper">
              <span v-for="tag in post.tags" :key="tag" class="">
                <nuxt-link
                  :to="`/tags/${tag}`"
                  class="bg-green-200 mr-2 p-1 rounded-md"
                  >#{{ tag }}
                </nuxt-link>
              </span>
            </div>
 <p class="text-xs mt-2 m-0">✏️ {{ formatDate(post.updatedAt) }}</p>
            <!-- <p>Author: {{ post.author.name }}</p> -->
          </div>
        </nuxt-link>
      </li>
    </ul>
<section id="prev-next" class="flex justify-between items-center">
  <nuxt-link :to="previousLink" class="m-2 bg-skunkblue text-white p-2 rounded-lg         transition
        duration-300
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-105">👈 Previous page</nuxt-link>
  <nuxt-link v-if="nextPage" :to="`${pageNumber + 1}`" class="m-2 bg-skunkblue text-white p-2 rounded-lg         transition
        duration-300
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-105">Next page 👉</nuxt-link>
</section>

    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {

    const pageNumber = parseInt(params.number);
    
    const tenPosts = await $content('posts', params.slug)
      .only(['author', 'createdAt', 'description', 'path', 'title', 'slug', 'updatedAt', 'tags'])
      .sortBy('createdAt', 'desc')
      .limit(10)
      .skip(9 * (pageNumber - 1))
      .fetch();

    if (!tenPosts.length) {
      return error({ statusCode: 404, message: 'No posts found!' });
    }

    const nextPage = tenPosts.length === 10;
    const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts;
    return { nextPage, tenPosts, pageNumber };
  },
  computed: {
    previousLink() {
      return this.pageNumber === 2 ? '/posts' : `/posts/page/${this.pageNumber - 1}`;
    },
  },
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-GB', options);
    },
  },
};
</script>