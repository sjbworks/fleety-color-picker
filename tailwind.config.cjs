module.exports = {
  // mode: 'jit',
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
      paleGray: '#eae5e3',
      slate: '#475569',
    },
    screens: {
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '500px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
