/* eslint-disable @typescript-eslint/no-explicit-any */
import createPlugin from 'tailwindcss/plugin'

const plugin = createPlugin(({ addVariant, e }) => {
  addVariant('checked-sibling', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }: { [x: string]: string }) => {
      const escaped = e(`checked-sibling${separator}${className}`)
      return `input:checked ~ .${escaped}`
    })
  })
  addVariant('important', ({ container }) => {
    container.walkRules((rule: any) => {
      rule.selector = `.\\!${rule.selector.slice(1)}`
      rule.walkDecls((decl: any) => {
        decl.important = true
      })
    })
  })
})

export default plugin
