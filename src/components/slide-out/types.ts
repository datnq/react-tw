import { ReactElement } from 'react'

export interface SlideOutProps {
  open?: boolean
  onClose: () => void
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
  position?: 'right' | 'left'
  closeIcon?: ReactElement
  title?: string | ReactElement
}
