import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { InputProps } from '../../types'
import { useTheme } from '../theme-provider'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, inputSize = 'md', state = 'normal', disabled, ...props },
    ref
  ) => {
    const theme = useTheme()
    const sizeStyles = theme?.input.size[inputSize]
    const stateStyles = theme?.input.state[state]
    const disabledStyles = theme?.input.state.disabled
    return (
      <input
        {...props}
        ref={ref}
        disabled={disabled}
        className={clsx(
          'align-middle border focus:outline-none focus:ring-4 transition-colors',
          sizeStyles,
          stateStyles,
          disabled ? disabledStyles : '',
          className
        )}
      />
    )
  }
)

export default Input
