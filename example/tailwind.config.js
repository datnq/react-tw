const defaultTheme = require('tailwindcss/defaultTheme')

const { plugins } = require('@datnq/react-tw')

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
      },
      animation: {
        disappearFromTop:
          'disappearFromTop 0.4s forwards cubic-bezier(.06,.71,.55,1)',
        disappearFromBottom:
          'disappearFromBottom 0.4s forwards cubic-bezier(.06,.71,.55,1)',
        appearFromTop:
          'appearFromTop 0.4s forwards cubic-bezier(.06,.71,.55,1)',
        appearFromBottom:
          'appearFromBottom 0.4s forwards cubic-bezier(.06,.71,.55,1)'
      },
      keyframes: {
        appearFromTop: {
          from: {
            transform: 'translate3d(0, -200, 0) scale(.6)',
            opacity: 0
          },
          to: {
            transform: 'translate3d(0, 0, -1px) scale(1)',
            opacity: 1
          }
        },
        appearFromBottom: {
          from: {
            transform: 'translate3d(0, 200, 0) scale(.6)',
            opacity: 0
          },
          to: {
            transform: 'translate3d(0, 0, 0) scale(1)',
            opacity: 1
          }
        },
        disappearFromTop: {
          from: {
            transform: 'translate3d(0, 0, -1px) scale(1)',
            opacity: 1
          },
          to: {
            transform: 'translate3d(0, -150%, -1px) scale(.6)',
            opacity: 0
          }
        },
        disappearFromBottom: {
          from: {
            transform: 'translate3d(0,0,-1px) scale(1)',
            opacity: 1
          },
          to: {
            transform: 'translate3d(0, 150%, -1px) scale(.6)',
            opacity: 0
          }
        }
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['checked', 'disabled', 'checked-sibling'],
      backgroundColor: ['checked', 'disabled', 'checked-sibling'],
      cursor: ['disabled'],
      opacity: ['checked-sibling'],
      padding: ['important'],
      ringColor: ['checked', 'checked-sibling'],
      ringOffsetColor: ['checked', 'checked-sibling'],
      ringOffsetWidth: ['checked', 'checked-sibling'],
      ringOpacity: ['checked', 'checked-sibling'],
      ringWidth: ['checked', 'checked-sibling'],
      textColor: ['important'],
      transform: ['checked-sibling'],
      translate: ['checked-sibling']
    }
  },
  plugins: [plugins.checkedSibling, plugins.important]
}
