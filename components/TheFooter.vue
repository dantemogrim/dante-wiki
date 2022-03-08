<template>
  <footer class="flex flex-col items-center justify-center w-full h-24">
    <nav class="flex flex-row items-center w-full text-gray-900 justify-evenly">
      <a
        class="transition duration-300 ease-in-out transform hover:text-indigo-500 hover:-translate-y-1 hover:scale-101"
        href="https://github.com/dantemogrim/"
        target="_blank"
        aria-label="GitHub"
      >
        <Code />
      </a>
      <a
        class="transition duration-300 ease-in-out transform hover:text-indigo-500 hover:-translate-y-1 hover:scale-101"
        href="mailto:1991.mogrim@gmail.com"
        aria-label="E-Mail"
      >
        <Mail />
      </a>
      <a
        class="transition duration-300 ease-in-out transform hover:text-indigo-500 hover:-translate-y-1 hover:scale-101"
        href="https://www.linkedin.com/in/dantemogrim"
        target="_blank"
        aria-label="LinkedIn"
      >
        <LinkedIn />
      </a>
      <a
        class="transition duration-300 ease-in-out transform hover:text-indigo-500 hover:-translate-y-1 hover:scale-101"
        href="https://www.dante.wiki/feed.xml"
        target="_blank"
        aria-label="RSS"
      >
        <RSS />
      </a>
    </nav>
    <p class="pt-4 text-pink-500">© Dante Mogrim {{ currentYear }}</p>
  </footer>
</template>

<script>
import Code from '~/components/icons/Code.vue';
import LinkedIn from '~/components/icons/LinkedIn.vue';
import Mail from '~/components/icons/Mail.vue';
import RSS from '~/components/icons/RSS.vue';

export default {
  components: {
    Code,
    LinkedIn,
    Mail,
    RSS,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
