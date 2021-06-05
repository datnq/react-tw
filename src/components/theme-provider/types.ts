import { Dispatch, ReactNode, RefObject } from 'react'
import { ThemeProps } from '../../types'

export interface ThemeContextProps {
  theme: ThemeProps
  modal: [ModalState, Dispatch<ModalStateAction>]
}

export interface ThemeOptions {
  modal?: Partial<ModalState>
}

export interface ThemeProviderProps {
  theme?: Partial<ThemeProps>
  options?: ThemeOptions
}

export type ModalFooterFunction = (
  close: () => void,
  focusRef: RefObject<HTMLButtonElement>
) => ReactNode

export interface ModalState {
  show?: boolean
  title?: ReactNode
  id?: string
  content?: ReactNode
  footer?: ReactNode | ModalFooterFunction
  variant?: 'info' | 'warning' | 'danger' | 'success'
}

export interface ModalStateAction {
  type: string
  payload?: Partial<ModalState>
}

export type ModalReducer<ModalState, ModalStateAction> = (
  modal: ModalState,
  action: ModalStateAction
) => ModalState
