import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { TextareaProps } from '../../types'
import { useTheme } from '../theme-provider'

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, inputSize = 'md', state = 'normal', disabled, ...props },
    ref
  ) => {
    const theme = useTheme()
    const sizeStyles = theme?.input.size[inputSize]
    const stateStyles = theme?.input.state[state]
    const disabledStyles = theme?.input.state.disabled
    return (
      <textarea
        {...props}
        ref={ref}
        className={clsx(
          'align-middle border focus:outline-none focus:ring-4 transition-colors',
          sizeStyles,
          stateStyles?.control,
          disabled ? disabledStyles?.control : '',
          className
        )}
      />
    )
  }
)

export default Textarea
