import { ReactNode } from 'react'

export interface ModalProps {
  onClose?: () => void
  open?: boolean
  title?: ReactNode
  footer?: ReactNode
  children?: (close?: () => void) => ReactNode | ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export interface ModalChildProps {
  className?: string
  children?: ReactNode
}
