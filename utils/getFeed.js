const constructFeedItem = (post, dir, hostname) => {
  const url = `${hostname}/${dir}/${post.slug}`;
  return {
    title: post.title,
    id: url,
    link: url,
    description: post.description,
    content: post.bodyPlainText,
  };
};

const create = async (feed, args) => {
  const [filePath, ext] = args;
  const hostname =
    process.NODE_ENV === 'production'
      ? 'https://my-production-domain.com'
      : 'http://localhost:3000';
  feed.options = {
    title: 'My Blog',
    description: 'Blog Stuff!',
    link: `${hostname}/feed.${ext}`,
  };
  const { $content } = require('@nuxt/content');
  if (posts === null || posts.length === 0)
    posts = await $content(filePath).fetch();

  for (const post of posts) {
    const feedItem = await constructFeedItem(post, filePath, hostname);
    feed.addItem(feedItem);
  }
  return feed;
};
