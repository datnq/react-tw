/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { createContext, PropsWithChildren } from 'react'
import merge from 'lodash.merge'
import { ThemeProps } from '../../types'
import defaultTheme from './theme'

export const ThemeContext = createContext<ThemeProps | undefined>(undefined)

interface ThemeProviderProps {
  theme?: Partial<ThemeProps>
}

export default ({ theme, children }: PropsWithChildren<ThemeProviderProps>) => {
  const themeValue = merge(defaultTheme, theme || {})
  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  )
}
