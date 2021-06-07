import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { useTheme } from '../provider'
import { CheckboxProps } from './types'

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      state = 'normal',
      className,
      controlClassName,
      indicatorClassName,
      disabled,
      ...props
    },
    ref
  ) => {
    const theme = useTheme('checkbox')
    const stateStyles = theme?.state[disabled ? 'disabled' : state]
    return (
      <label
        className={clsx(
          'inline-flex relative align-middle',
          { 'pointer-events-none': disabled, 'cursor-pointer': !disabled },
          className
        )}
      >
        <input
          type='checkbox'
          ref={ref}
          disabled={disabled}
          className={clsx(
            'appearance-none outline-none cursor-pointer transition-colors',
            'h-4 w-4 border-2 rounded inline-block checked:ring-2',
            stateStyles?.control,
            controlClassName
          )}
          {...props}
        />
        <span
          className={clsx(
            'block absolute left-1/2 top-1/2 w-1 h-2 -mt-px',
            'border-2 border-t-0 border-l-0',
            'transform rotate-45 -translate-x-1/2 -translate-y-1/2',
            stateStyles?.indicator,
            indicatorClassName
          )}
        />
      </label>
    )
  }
)

export default Checkbox
