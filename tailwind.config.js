module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      display: ['hover', 'group-hover'],
    },
  },
  plugins: [],
};
