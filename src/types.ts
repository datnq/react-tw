import { ComponentPropsWithoutRef, ReactElement } from 'react'

export interface ThemeProps {
  button: {
    variant: DefaultButtonVariants & { [variant: string]: ClassNames }
    size: DefaultButtonSizes & { [size: string]: ClassNames }
  }
}

type ClassNames = string | string[]

export interface DefaultButtonVariants {
  default: ClassNames
  primary: ClassNames
  danger: ClassNames
  success: ClassNames
}

export interface DefaultButtonSizes {
  sm: ClassNames
  md: ClassNames
  lg: ClassNames
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
