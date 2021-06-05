const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  jit: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: {
        layout: '200px minmax(0, 1fr)'
      },
      gridTemplateRows: {
        layout: 'minmax(0, 1fr) 60px'
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['checked', 'disabled', 'checked-sibling'],
      backgroundColor: ['checked', 'disabled', 'checked-sibling'],
      cursor: ['disabled'],
      ringColor: ['checked'],
      ringOffsetColor: ['checked'],
      ringOffsetWidth: ['checked'],
      ringOpacity: ['checked'],
      ringWidth: ['checked'],
      opacity: ['checked-sibling'],
      transform: ['checked-sibling'],
      translate: ['checked-sibling'],
      filter: ['disabled']
    }
  },
  plugins: [require('@datnq/react-tw').plugin]
}
