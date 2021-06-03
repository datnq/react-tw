const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        layout: '200px minmax(0, 1fr)'
      },
      gridTemplateRows: {
        layout: 'minmax(0, 1fr) 60px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
