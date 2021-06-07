import { useContext } from 'react'
import { TwxContext } from '../components/provider/Context'
import { ThemeProps } from '../theme/types'

export function useTheme<K extends keyof ThemeProps>(
  element: K
): ThemeProps[K] | undefined {
  const ctx = useContext(TwxContext)
  return ctx?.theme[element]
}
