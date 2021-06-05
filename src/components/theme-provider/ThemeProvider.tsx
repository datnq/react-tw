import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  useReducer
} from 'react'
import merge from 'lodash.merge'
import defaultTheme from './theme'
import { Modal } from '../modal'
import {
  ModalReducer,
  ModalState,
  ModalStateAction,
  ThemeContextProps,
  ThemeProviderProps
} from './types'

export const ThemeContext =
  createContext<ThemeContextProps | undefined>(undefined)

const modalReducer: ModalReducer<ModalState, ModalStateAction> = (
  modal,
  action
) => {
  switch (action.type) {
    case 'show': {
      return { ...modal, show: true, ...action.payload }
    }
    case 'hide': {
      return {
        ...modal,
        show: false,
        title: undefined,
        content: undefined,
        footer: undefined,
        variant: undefined
      }
    }
    default:
  }

  return modal
}

export default ({
  theme,
  children,
  options
}: PropsWithChildren<ThemeProviderProps>): ReactElement => {
  const themeValue = merge(defaultTheme, theme || {})
  const [modal, dispatch] = useReducer(modalReducer, options?.modal || {})

  const close = (): void => {
    dispatch({ type: 'hide' })
  }

  return (
    <ThemeContext.Provider
      value={{ theme: themeValue, modal: [modal, dispatch] }}
    >
      {children}
      <Modal onClose={close} />
    </ThemeContext.Provider>
  )
}
