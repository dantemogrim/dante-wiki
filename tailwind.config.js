module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ff7152',
        secondary: '#52e7ff',
        accent: '#f452ff',
      },
      fontFamily: {
        hack: ['hack'],
        spaceGrotesk: ['spaceGrotesk'],
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
