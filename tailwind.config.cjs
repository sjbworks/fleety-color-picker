module.exports = {
  purge: {
    content: ['./src/*.svelte', './src/**/*.svelte', './src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      orange: '#de4928',
      ibory: '#f5ebe9',
      gray: '#212121',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
