/* eslint-disable @typescript-eslint/no-explicit-any */
import createPlugin from 'tailwindcss/plugin'

export const checkedSibling = createPlugin(({ addVariant, e }) => {
  addVariant('checked-sibling', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }: { [x: string]: string }) => {
      const escaped = e(`checked-sibling${separator}${className}`)
      return `input:checked ~ .${escaped}`
    })
  })
})
