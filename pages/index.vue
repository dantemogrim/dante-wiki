<template>
  <div>
    <h1 class="m-4 text-6xl text-black font-vinsonRegular">Hello, im.dante</h1>
    <article class="bg-gray-50 m-2 p-2 rounded-md shadow-lg">
      <p class="font-hack">
        Cupcake cookie liquorice sweet halvah bonbon jelly biscuit marzipan.
      </p>
    </article>
    <h2 class="m-4 text-3xl text-black font-vinsonRegular">Latest</h2>

    <section class="bg-gray-50 m-2 p-2 rounded-md shadow-lg">
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
  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge();

      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        console.log(this.story.content);
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      });

      // Use the bridge to listen the events
      storyblokInstance.on(['published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        });
      });
    });
  },
  asyncData(context) {
    // // This what would we do in real project
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path

    // Load the JSON from the API - loadig the home content (index page)
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
