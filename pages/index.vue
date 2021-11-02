<template>
  <div>
    <article class="bg-indigo-50 m-2 p-2 rounded-md shadow-lg">
      <h1 class="m-4">HELLO, IM.DANTE</h1>
      <p class="m-4">
        Cupcake cookie liquorice sweet halvah bonbon jelly biscuit marzipan.
      </p>
    </article>
    <!-- Featured articles. -->
    <section class="flex flex-col my-1 p-1">
      <component
        v-if="story.content.component"
        :key="story.content._uid"
        :blok="story.content"
        :is="story.content.component"
      />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      story: { content: {} },
    };
  },
  async fetch(context) {
    // Loading reference data - Articles in our case
    if (context.store.state.articles.loaded !== '1') {
      let articlesRefRes = await context.app.$storyapi.get(`cdn/stories/`, {
        starts_with: 'articles/',
        version: 'draft',
      });
      context.store.commit('articles/setArticles', articlesRefRes.data.stories);
      context.store.commit('articles/setLoaded', '1');
    }
  },
  mounted() {
    this.$storybridge(
      () => {
        const storyblokInstance = new StoryblokBridge();

        storyblokInstance.on(['input', 'published', 'change'], (event) => {
          if (event.action == 'input') {
            if (event.story.id === this.story.id) {
              this.story.content = event.story.content;
            }
          } else {
            this.$nuxt.$router.go({
              path: this.$nuxt.$router.currentRoute,
              force: true,
            });
          }
        });
      },
      (error) => {
        console.error(error);
      }
    );
  },
  asyncData(context) {
    // This what would we do in real project
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published';
    const fullSlug =
      context.route.path == '/' || context.route.path == ''
        ? 'home'
        : context.route.path;

    //Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi
      .get('cdn/stories/home', {
        version: 'draft',
      })
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          });
        }
      });
  },
};
</script>
