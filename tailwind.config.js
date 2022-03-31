module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`,
  ],
  safelist: [
    'min-h-screen',
    {
      pattern: /^bg-.*/,
      variants: ['md', 'lg'],
    },
    {
      pattern: /^text-.*/,
      variants: ['md', 'lg'],
    },
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 50s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      colors: {
        alfred: '#5c1f87',
        'blue-link': '#0000FF',
        buttermilk: '#fff5e3',
        charcoal: '#2f292e',
        label: '#222222',
        'card-blue': '#5e81c4',
        'card-pale-blue': '#6083c6',
        'card-purple': '#7f73b4',
        'card-green': '#38a27a',
        'card-pink': '#e6afa6',
        'card-sky': '#73a4b9',
        'card-red': '#ec6867',
        'card-gray': '#a8a8a8',
        'card-peach': 'fc978d',
        'card-orange': '#e77459',
        'card-brown': '#b78f68',
        'card-yellow': '#eadc5e',
        bootstrap: '#563d7c',
        csharp: '#178601',
        css: '#563c7c',
        composer: '#c18e6a',
        html: '#e24c26',
        javascript: '#f1e05a',
        laravel: '#f9322b',
        nuxt: '#012a35',
        php: '#4f5d95',
        python: '#3572a5',
        react: '#61dafb',
        rust: '#dea584',
        scss: '#c6538c',
        shell: '#89e051',
        sql: '#e38c00',
        'styled-components': '#3f3f3f',
        typescript: '#2b7488',
        zsh: '#05007f',
      },
      fontFamily: {
        cartridge: ['cartridge'],
        'jetbrains-mono': ['jetbrains-mono'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      maxHeight: {
        128: '32rem',
      },
      spacing: {
        15: '3.85rem',
      },
      width: {
        120: '30rem',
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
      padding: ['first', 'last'],
      margin: ['first', 'last'],
    },
  },
};
