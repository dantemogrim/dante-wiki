<template>
  <footer class="min-w-full glassmorphism h-45">
    <nav class="flex flex-row items-center m-2 justify-evenly h-4/5">
      <!-- GitHub. -->
      <a
        class="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101"
        href="https://github.com/dantemogrim/"
        target="_blank"
      >
        <GitHub />
      </a>
      <!-- E-mail. -->
      <a
        class="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101"
        href="mailto:1991.mogrim@gmail.com"
      >
        <Mail />
      </a>
      <!-- LinkedIn. -->
      <a
        class="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101"
        href="https://www.linkedin.com/in/dantemogrim"
        target="_blank"
      >
        <LinkedIn />
      </a>
      <!-- RSS -->
      <a
        class="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101"
        href="https://www.dante.wiki/feed.xml"
        target="_blank"
      >
        <RSS />
      </a>
    </nav>
    <section class="flex flex-row justify-center w-full h-auto">
      <p class="my-2">© Dante Mogrim {{ currentYear }}</p>
    </section>
  </footer>
</template>

<script>
import GitHub from '~/components/icons/GitHub.vue';
import LinkedIn from '~/components/icons/LinkedIn.vue';
import Mail from '~/components/icons/Mail.vue';
import RSS from '~/components/icons/RSS.vue';

export default {
  components: {
    GitHub,
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
