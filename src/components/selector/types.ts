import {
  ComponentPropsWithoutRef,
  MutableRefObject,
  ReactElement,
  ReactNode
} from 'react'
import { ButtonProps } from '../button'

export interface DateFormats {
  long: Intl.DateTimeFormatOptions
  short: Intl.DateTimeFormatOptions
}

export interface SelectOptionsProps {
  key: string
  value: unknown
  text: ReactElement | string
}

export interface PickerProps<T> {
  value?: T
  onChange?: (value: T) => void
  containerClassName?: string
  className?: string
  placeholder?: string
  disabled?: boolean
  variant?: 'default' | 'primary' | 'danger' | 'success' | 'link' | 'custom'
  size?: 'sm' | 'md' | 'lg'
  narrow?: boolean
}

export interface FilePickerProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'onChange'> {
  onChange?: (files: File[]) => void
  multiple?: boolean
  children: ReactNode | (() => ReactNode)
}

export interface DatepickerProps extends PickerProps<Date | undefined> {
  format?: Intl.DateTimeFormatOptions
  showOtherMonth?: boolean
  weekDayNames?: string[]
  locale?: string
}

export interface SelectProps extends PickerProps<string | undefined> {
  options: SelectOptionsProps[]
}

export interface ListboxToggleProps extends ButtonProps {
  label?: string | ReactNode | null
  icon?: ReactNode
  placeholder?: string
}

export interface ListboxOptionsProps {
  className?: string
}

export interface ListItemProps extends ComponentPropsWithoutRef<'div'> {
  selected?: boolean
}

export interface FilePickerRenderProps {
  files: File[]
  handlers: {
    add: () => void
    clear: () => void
    remove: (index: number) => void
    replace: (index?: number) => void
  }
  dragging: boolean
  dragDropRef: MutableRefObject<HTMLElement | null>
}
