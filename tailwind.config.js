module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`,
  ],
  safelist: [
    'bg-black',
    'bg-white',
    {
      pattern:
        /bg-(amber|blue|cyan|fuchsia|gray|emerald|green|indigo|lime|neutral|orange|pink|purple|red|rose|sky|slate|stone|teal|violet|yellow|zinc)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['focus', 'hover', 'md', 'md:hover', 'lg', 'lg:hover'],
    },
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 50s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      backgroundImage: {
        star: "url('~/static/star.svg')",
        texture: "url('~/static/texture.png')",
      },
      colors: {
        buttermilk: '#fff5e3',
        charcoal: '#2f292e',
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
    },
  },
};
