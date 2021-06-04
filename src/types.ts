/* eslint-disable @typescript-eslint/no-empty-interface */
import { ComponentPropsWithoutRef, ReactElement } from 'react'

export interface ThemeProps {
  button: {
    variant: DefaultButtonVariants & { [x: string]: ClassNames }
    size: DefaultButtonSizes & { [x: string]: ClassNames }
  }
  input: {
    state: DefaultInputStates & { [x: string]: ClassNames }
    size: DefaultControlSizes & { [x: string]: ClassNames }
  }
  checkbox: {
    state: DefaultCheckboxStates & { [x: string]: ClassNames }
    size: DefaultControlSizes & { [x: string]: ClassNames }
  }
  radio: {
    state: DefaultCheckboxStates & { [x: string]: ClassNames }
    size: DefaultControlSizes & { [x: string]: ClassNames }
  }
}

type ClassNames = string | string[]

export interface DefaultControlState {
  normal: ClassNames
  disabled: ClassNames
  valid: ClassNames
  invalid: ClassNames
}

export interface DefaultCheckboxStates extends DefaultControlState {}

export interface DefaultInputStates extends DefaultControlState {}

export interface DefaultControlSizes {
  sm: ClassNames
  md: ClassNames
  lg: ClassNames
}

export interface DefaultButtonVariants {
  default: ClassNames
  primary: ClassNames
  danger: ClassNames
  success: ClassNames
}

export interface DefaultButtonSizes extends DefaultControlSizes {
  'narrow-sm': ClassNames
  'narrow-md': ClassNames
  'narrow-lg': ClassNames
}

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'primary' | 'danger' | 'success' | 'link'
  size?: 'sm' | 'lg' | 'md'
  narrow?: boolean
  disabled?: boolean
  iconOnly?: boolean
}

export interface DropdownMenuProps {
  className?: string
  position?: 'left' | 'right'
}

export interface DropdownItemRenderProps {
  active: boolean
  item: DropdownItemProps
  onItemClick?: (
    value: unknown,
    active: boolean,
    item: DropdownItemProps
  ) => unknown
}

export interface DropdownItemProps {
  key: string
  value?: unknown
  label?: ReactElement<unknown> | string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}

export interface DropdownProps {
  className?: string
  items?: DropdownItemProps[]
  renderItem?: (props: DropdownItemRenderProps) => ReactElement
  onItemClick?: (
    value: unknown,
    active: boolean,
    item: DropdownItemProps
  ) => unknown
}

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  state?: 'normal' | 'valid' | 'invalid'
  inputSize?: 'sm' | 'md' | 'lg'
}
export interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  state?: 'default' | 'valid' | 'invalid'
  inputSize?: 'sm' | 'md' | 'lg'
}
export interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {
  state?: 'normal' | 'valid' | 'invalid'
  inputSize?: 'sm' | 'md' | 'lg'
}
