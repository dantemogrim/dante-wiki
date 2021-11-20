module.exports = {
  theme: {
    extend: {
      colors: {
        skunkpurple: '#67659A',
        skunkdarkpurple: '#414677',
        skunklightpurple: '#E7E7FF',
        skunkblue: '#2E63A8',
      },
      fontFamily: {
        jetbrainsmono: ['jetbrainsmono'],
      },
    },
  },
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
};
