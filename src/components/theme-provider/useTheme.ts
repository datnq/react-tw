import { useContext } from 'react'
import { ThemeProps } from '../../types'
import { ThemeContext } from './ThemeProvider'

const useTheme = (): ThemeProps | undefined => {
  const ctx = useContext(ThemeContext)
  return ctx?.theme
}
export default useTheme
