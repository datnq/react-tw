import { ReactElement } from 'react'

export interface SelectOptionsProps {
  key: string
  value: unknown
  text: ReactElement
}

export interface PickerProps<T> {
  value?: T
  onChange: (value: T) => void
  options: SelectOptionsProps[]
  className?: string
  placeholder?: string
  disabled?: boolean
  state?: 'normal' | 'valid' | 'invalid'
  inputSize?: 'sm' | 'md' | 'lg'
}

export interface DatepickerProps extends PickerProps<Date> {
  format?: Intl.DateTimeFormatOptions
  showOtherMonth?: boolean
  weekDayNames?: string[]
  locale?: string
}

export interface SelectProps extends PickerProps<string> {
  options: SelectOptionsProps[]
}
