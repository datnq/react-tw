/* eslint-disable @typescript-eslint/no-explicit-any */
import createPlugin from 'tailwindcss/plugin'

export const important = createPlugin(({ addVariant }) => {
  addVariant('important', ({ container }) => {
    container.walkRules((rule: any) => {
      rule.selector = `.\\!${rule.selector.slice(1)}`
      rule.walkDecls((decl: any) => {
        decl.important = true
      })
    })
  })
})
