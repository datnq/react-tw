import { useContext } from 'react'
import { ThemeContext } from '../components/theme-provider/ThemeProvider'
import { ModalState } from '../components/theme-provider/types'

export interface ModalAction {
  get: () => Partial<ModalState>
  show: (data: Partial<ModalState>) => void
  hide: () => void
}

export const useModal = (options: Partial<ModalState> = {}): ModalAction => {
  const ctx = useContext(ThemeContext)
  const [modal = {}, dispatch] = ctx?.modal || []

  const get = (): Partial<ModalState> => modal

  const show = (data = {}): void => {
    dispatch && dispatch({ type: 'show', payload: { ...options, ...data } })
  }

  const hide = (): void => {
    dispatch && dispatch({ type: 'hide' })
  }

  return { get, show, hide }
}
