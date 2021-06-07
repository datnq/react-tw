import { ReactNode } from 'react'
import { ButtonProps } from '../button/types'
import { ModalProps } from '../modal/types'

export interface DialogProps extends ModalProps {
  message?: ReactNode
  okButton?: ReactNode
  cancelButton?: ReactNode
  okButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
  onOK?: () => void
  onCancel?: () => void
  showCancel?: boolean
  variant?: 'info' | 'warn' | 'danger' | 'error' | 'success'
}

export interface DialogIconProps {
  variant?: 'info' | 'warn' | 'danger' | 'error' | 'success'
  className?: string
}

export interface DialogActions {
  alert: (message: ReactNode, options?: DialogProps) => Promise<boolean>
  confirm: (message: ReactNode, options?: DialogProps) => Promise<boolean>
}
