<template>
  <div>
    <Header />
    <h2>Static text from "default vue"</h2>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
