/* eslint-disable @typescript-eslint/no-empty-interface */
/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

interface SvgrComponent
  extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}

interface Helpers {
  addUtilities(...args: unknown[]): unknown
  addComponents(...args: unknown[]): unknown
  addBase(...args: unknown[]): unknown
  addVariant(name: string, callback: (...args: unknown[]) => void): unknown
  e(...args: unknown[]): unknown
  prefix(...args: unknown[]): unknown
  theme(...args: unknown[]): unknown
  variants(...args: unknown[]): unknown
  config(...args: unknown[]): unknown
  postcss: unknown
}

type ConfigWrapperFunction = (helpers: unknown) => unknown
type ColorConfigurationType = {
  [name: string]: string | { [nested: string]: string }
}

interface TwConfiguration {
  prefix: string
  important: boolean
  separator: string
  theme: Partial<{
    colors: ColorConfigurationType
    [plugin: string]: ConfigWrapperFunction | unknown
  }>
}

/**
 * Tailwind CSS.
 */
declare module 'tailwindcss' {
  export type ColorConfiguration = ColorConfigurationType

  export interface Configuration extends Partial<TwConfiguration> {}

  export interface TailwindPluginHelpers extends Helpers {}

  export type TailwindPluginHandler = (helpers: TailwindPluginHelpers) => void

  export interface TailwindPlugin {
    config: unknown
    handler: TailwindPluginHandler
  }
}

// /**
//  * Adds types to the plugin API
//  */
declare module 'tailwindcss/plugin' {
  function plugin(callback: (helpers: Helpers) => void): void
  export = plugin
}
