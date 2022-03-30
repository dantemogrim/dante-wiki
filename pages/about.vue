<template>
  <div class="max-w-2xl lg:max-w-3xl font-jetbrains-mono">
    <Heading>About</Heading>
    <article class="flex flex-col mx-4 mb-8 md:mx-0">
      <p>
        Hi! My name is Dante Mogrim. I am a web developer living in Gothenburg,
        Sweden. Welcome to my personal cyber nook where I’ll be sharing all
        kinds of development related findings as well as other fun things.
      </p>
      <p>
        This project is both a personal + open source notebook. A collection of
        notes that will grow over time, accessible for anyone to take part of a
        wide range of maybe useful, perhaps comprehensive information.
      </p>
    </article>
    <img
      class="my-4"
      src="/about-me.png"
      alt="An illustration of me by my desk with my laptop and my two cats and a cup of coffee."
    />
    <article class="flex flex-col mx-4 mb-8 md:mx-0">
      <ul class="ml-4 list-disc">
        <li>
          I am a cat guardian to two tortie sisters named Tosca and Waffles.
        </li>
        <li>I've worked as a tram driver for four years.</li>
        <li>
          I was born in Monterey, California (American + Swedish parents) and
          came to Sweden when I was two.
        </li>
        <li>I have a master’s degree in motion sickness.</li>
        <li>
          I am a left handed, habitual note taker with an untamed love for
          lists.
        </li>
      </ul>
    </article>
    <Subheading>Connect</Subheading>
    <article class="flex flex-col mx-4 mb-8 md:mx-0">
      <p class="mt-1 mb-2">
        <i>
          If you have any questions, feedback, recommendations, requests or just
          want to say "hi":
        </i>
      </p>
      <p class="mb-2">
        Feel free to contact me at
        <a class="text-blue-link" href="mailto:mogrimdante@gmail.com"
          >mogrimdante@gmail.com</a
        >
      </p>
      <p>Social media accounts:</p>
      <ul class="ml-4 list-disc">
        <li>
          <a class="text-blue-link" href="https://github.com/dantemogrim/"
            >🐈‍⬛ GitHub</a
          >
        </li>
        <li>
          <a
            class="text-blue-link"
            href="https://www.linkedin.com/in/dantemogrim/"
            >🔗 LinkedIn</a
          >
        </li>
      </ul>
    </article>
    <Subheading>Setup</Subheading>
    <article class="flex flex-col mx-4 mb-8 md:mx-0">
      <p class="font-semibold">General setup + hardware:</p>
      <ul class="ml-4 list-disc">
        <li>💻 Macbook Pro 2019</li>
        <li>⌨️ Magic Keyboard</li>
        <li>🎙 Røde NT-USB</li>
      </ul>
      <p class="mt-3 font-semibold">For this particular website:</p>
      <ul class="ml-4 list-disc">
        <li>
          Base:
          <a href="https://nuxtjs.org/" class="text-blue-link" target="_blank"
            >Nuxt.js</a
          >
        </li>
        <li>
          Domain:
          <a
            href="https://www.one.com/en/"
            class="text-blue-link"
            target="_blank"
            >one.com</a
          >
        </li>
        <li>
          Font:
          <a
            href="https://www.jetbrains.com/lp/mono/"
            class="text-blue-link"
            target="_blank"
            >JetBrains Mono</a
          >
          &
          <a
            href="https://simplebits.com/collections/fonts/products/cartridge-font"
            class="text-blue-link"
            target="_blank"
            >Cartridge</a
          >
        </li>
        <li>
          Formatter:
          <a href="https://prettier.io/" class="text-blue-link" target="_blank"
            >Prettier</a
          >
        </li>
        <li>
          Git-based Headless CMS:
          <a
            href="https://content.nuxtjs.org/"
            class="text-blue-link"
            target="_blank"
            >nuxt/content</a
          >
        </li>
        <li>
          Hosting:
          <a
            href="https://www.netlify.com/"
            class="text-blue-link"
            target="_blank"
            >Netlify</a
          >
        </li>
        <li>
          Sitemap:
          <a
            href="https://sitemap.nuxtjs.org/"
            class="text-blue-link"
            target="_blank"
          >
            nuxt/sitemap</a
          >
        </li>
        <li>
          Styling:
          <a
            href="https://tailwindcss.com/"
            class="text-blue-link"
            target="_blank"
          >
            Tailwind CSS</a
          >
        </li>
        <li>
          Syntax Highlighter:
          <a href="https://prismjs.com/" class="text-blue-link" target="_blank"
            >PrismJS</a
          >
        </li>
      </ul>
      <p class="mt-3">
        🦨 The design is inspired by my first programming memory from 1998 when
        I was active in an online community called
        <a
          href="https://en.wikipedia.org/wiki/Skunk.nu"
          class="text-blue-link"
          target="_blank"
          >skunk.nu</a
        >.
      </p>
      <p class="mt-3">
        👨‍💻 The code for this project is open source. You can find it
        <a
          href="https://github.com/dantemogrim/dante-wiki"
          class="text-blue-link"
          target="_blank"
          >here</a
        >.
      </p>
    </article>
    <Subheading>Playlists</Subheading>
    <article class="flex flex-col mx-4 mb-8 md:mx-0">
      <ul class="ml-4 list-disc">
        <li>
          <a
            class="text-blue-link"
            href="https://open.spotify.com/playlist/63eWm3mK0MQyOKm8QNzzqs?si=5b65d62936b643b6"
            target="_blank"
            >Computer Friendly</a
          >
        </li>
        <li>
          <a
            class="text-blue-link"
            href="https://open.spotify.com/playlist/0boUIgfM2MNguOC7bL2dzC?si=0f4509c917dd45d8"
            target="_blank"
            >Relaxation Station</a
          >
        </li>
        <li>
          <a
            class="text-blue-link"
            href="https://open.spotify.com/playlist/0O3HeZuqz4tt0LyQQYy178?si=5859f635bfe94410"
            target="_blank"
            >Saturday Night In</a
          >
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta';
import Tag from '~/components/global/Tag.vue';

export default {
  head: {
    title: 'About',
  },
  components: {
    Tag,
  },
  computed: {
    meta() {
      const metaData = {
        title: `About | dante.wiki`,
        url: `${this.$config.baseUrl}/about`,
      };
      return getSiteMeta(metaData);
    },
  },
};
</script>
