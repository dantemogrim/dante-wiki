module.exports = {
  purge: {
    transform: {
      md: (content) => {
        return remark().process(content)
      },
    },
    safelist: ['hljs'],
  },
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
};
