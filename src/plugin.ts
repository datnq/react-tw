import createPlugin from 'tailwindcss/plugin'

const plugin = createPlugin(({ addVariant, e }) => {
  addVariant('checked-sibling', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }: { [x: string]: string }) => {
      const escaped = e(`checked-sibling${separator}${className}`)
      return `input:checked ~ .${escaped}`
    })
  })
})

export default plugin
