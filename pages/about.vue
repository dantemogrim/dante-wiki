<template>
  <div>
    <div class="headingCard mt-4 mx-2 p-3">
      <h1 class="text-white">About</h1>
      <p v-if="$nuxt.isOffline">Oops! You're offline. 😱</p>
    </div>
    <article class="bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2">
      <p>
        Hi! My name is Dante Mogrim. I am a web developer student living in
        Gothenburg, Sweden. Welcome to my personal cyber nook where I’ll be
        sharing all kinds of development related knowledge as well as other fun
        things.
      </p>
    </article>
    <div class="w-full flex justify-center">
      <img
        src="https://media.giphy.com/media/dJHeg7s9WflUxV0x52/giphy-downsized-large.gif"
      />
    </div>
    <article class="bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2">
      <p class="m-0">Here are a few random facts and about me:</p>
      <ul>
        <li>
          I am a cat guardian to two tortie sisters named Tosca and Våfflan.
        </li>
        <li>I was once a tram driver for four years.</li>
        <li>
          I was born in Monterey, California (American + Swedish parents) and
          came to Sweden when I was two.
        </li>
        <li>I have a master’s degree in motion sickness.</li>
        <li>
          I am working on coming up with the ultimate recipe for Pad Thai. If
          you have any pointers whatsoever, please share.
        </li>
        <li>
          I am a left handed, habitual note taker with an untamed love for
          lists.
        </li>
      </ul>
    </article>
    <div class="subheadingCard mt-6 mx-2 p-3">
      <h2 class="text-white">Connect</h2>
    </div>
    <article
      class="bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2"
    ></article>
    <div class="subheadingCard mt-6 mx-2 p-3">
      <h2 class="text-white">Setup</h2>
    </div>
    <article class="bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2">
      <p class="m-0">For this particular website:</p>
      <ul>
        <li>Nuxt.js</li>
        <li>Tailwind CSS</li>
        <li>nuxt/content</li>
      </ul>
      <ul>
        <li>General setup/hardware? I am currently using:</li>
        <li>Macbook Pro 2019</li>
      </ul>
    </article>
    <div class="subheadingCard mt-6 mx-2 p-3">
      <h2 class="text-white">Playlists</h2>
    </div>
    <article
      class="bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2"
    ></article>
  </div>
</template>

<style scoped>
.headingCard {
  background-color: #505d8c;
  clip-path: polygon(100% 0%, 93% 51%, 100% 100%, 0 100%, 0% 50%, 0 0);
}

.subheadingCard {
  background-color: #505d8c;
  clip-path: polygon(100% 0%, 93% 51%, 100% 100%, 0 100%, 0% 50%, 0 0);
}
</style>

<script>
export default {
  head: {
    title: 'About',

    meta: [
      { property: 'og:site_name', content: 'Dante Mogrim' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://dante.im',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'About',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'My digital garden filled with web development articles, notes and tutorials.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/meta.png',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: '' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://dante.im',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'About',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'My digital garden filled with web development articles, notes and tutorials.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/a-loveley-image.png',
      },
    ],

    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://dante.im',
      },
    ],
  },
};
</script>
