import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { useTheme } from '../provider'
import { TextareaProps } from './types'

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      inputSize = 'md',
      state = 'normal',
      disabled,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const theme = useTheme('input')
    const sizeStyles = theme?.size[inputSize]
    const stateStyles = theme?.state[state]
    const disabledStyles = theme?.state.disabled
    return (
      <div className={clsx('relative', containerClassName)}>
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
      </div>
    )
  }
)

export default Textarea
