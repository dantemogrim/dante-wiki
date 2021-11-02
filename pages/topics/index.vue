<template>
  <section>
    <h1 class="m-4">ALL TOPICS</h1>
    {{ topics }}
    <ul class="flex flex-col">
      <li
        v-for="topic in stories"
        :key="topic._uid"
        class="flex-auto"
        style="min-width: 33%"
      >
        <topic-teaser
          v-if="topic.content"
          :topic-link="topic.full_slug"
          :topic-content="topic.content"
          class="bg-gray-50 m-2 p-2 rounded-md shadow-lg"
        />
        <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">
          This content loads on save. <strong>Save the entry & reload.</strong>
        </p>
      </li>
    </ul>
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
      .get('cdn/stories', {
        starts_with: 'topics/',
        version: 'draft',
        sort_by: 'position:desc',
      })
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: 'Failed to receive content from api',
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
