import { useContext } from 'react'
import { ThemeProps } from '../../types'
import { ThemeContext } from './ThemeProvider'

const useTheme = (): ThemeProps | undefined => useContext(ThemeContext)
export default useTheme
