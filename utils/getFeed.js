export default {
  feed: async () => {
    const posts = (await axios.get('https://www.dante.wiki/posts')).data;
    const tags = (await axios.get('https://www.dante.wiki/tags')).data;

    return tags.map((t) => {
      const relevantPosts = posts.filter(/*filter posts somehow*/);

      return {
        path: `/${t.slug}.xml`, // The route to your feed.
        async create(feed) {
          feed.options = {
            title: `${t.name} - My blog`,
            link: `https://www.dante.wiki/${t.slug}.xml`,
            description: `All posts related to ${t.name} of my blog`,
          };

          relevantPosts.forEach((post) => {
            feed.addItem({
              title: post.title,
              id: post.id,
              link: `https://www.dante.wiki/posts/${post.slug}`,
              description: post.excerpt,
              content: post.text,
            });
          });
        },
        cacheTime: 1000 * 60 * 15,
        type: 'rss2',
      };
    });
  },
};
