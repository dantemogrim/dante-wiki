<template>
  <section>
    <h1 class="m-4">ALL TOPICS</h1>
    {{ stories }}
  </section>
</template>

<script>
export default {
  data() {
    return {
      stories: [],
    };
  },
  asyncData(context) {
    return context.app.$storyapi
      .getAll('cdn/tags', {
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
