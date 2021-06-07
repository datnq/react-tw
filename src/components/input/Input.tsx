import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { useTheme } from '../provider'
import { InputProps } from './types'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      inputSize = 'md',
      state = 'normal',
      disabled,
      ...props
    },
    ref
  ) => {
    const theme = useTheme('input')
    const sizeStyles = theme?.size[inputSize]
    const stateStyles = theme?.state[state]
    const disabledStyles = theme?.state.disabled
    return (
      <div className={clsx('relative inline-flex', containerClassName)}>
        <input
          {...props}
          ref={ref}
          disabled={disabled}
          className={clsx(
            'align-middle border focus:outline-none focus:ring-4 transition-colors w-full',
            sizeStyles,
            stateStyles?.control,
            disabled ? disabledStyles?.control : '',
            className
          )}
        />
      </div>
    )
  }
)

export default Input
