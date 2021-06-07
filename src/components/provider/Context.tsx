import { createContext } from 'react'
import { TwxContextProps } from './types'

export const TwxContext = createContext<TwxContextProps | undefined>(undefined)
