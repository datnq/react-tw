import { ReactNode } from 'react'
import { ButtonProps } from '../button/types'

export interface ModalProps {
  onClose?: () => void
  open?: boolean
  title?: ReactNode
  footer?: ReactNode
  children?: (close?: () => void) => ReactNode | ReactNode
}

export interface ModalChildProps {
  className?: string
  children?: ReactNode
}

export interface DialogProps extends ModalProps {
  message?: ReactNode
  okButton?: ReactNode
  cancelButton?: ReactNode
  okButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
  onOK?: () => void
  onCancel?: () => void
  showCancel?: boolean
}

export interface DialogActions {
  alert: (message: ReactNode, options?: DialogProps) => Promise<boolean>
  confirm: (message: ReactNode, options?: DialogProps) => Promise<boolean>
}
