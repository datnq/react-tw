import { ComponentPropsWithoutRef } from 'react'

export interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {
  state?: 'normal' | 'valid' | 'invalid'
  inputSize?: 'sm' | 'md' | 'lg'
  className?: string
  indicatorClassName?: string
  controlClassName?: string
}

interface CommonInputProps {
  containerClassName?: string
  state?: 'normal' | 'valid' | 'invalid'
  inputSize?: 'sm' | 'md' | 'lg'
}

export interface InputProps
  extends CommonInputProps,
    ComponentPropsWithoutRef<'input'> {}

export interface TextareaProps
  extends CommonInputProps,
    ComponentPropsWithoutRef<'textarea'> {}

export interface CheckboxGroupOption {
  key: string
  value?: string | number | readonly string[]
  text: string
}

export interface CheckboxGroupProps extends CheckboxProps {
  options: CheckboxGroupOption[]
}
