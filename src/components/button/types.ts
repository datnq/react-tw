import { ComponentPropsWithoutRef } from 'react'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'primary' | 'danger' | 'success' | 'link' | 'custom'
  size?: 'sm' | 'lg' | 'md'
  narrow?: boolean
  disabled?: boolean
  iconOnly?: boolean
}
