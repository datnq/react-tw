import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { useTheme } from '../../hooks'
import { CheckboxProps } from './types'

const Radio = forwardRef<HTMLInputElement, CheckboxProps>(
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
    const theme = useTheme('radio')
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
          type='radio'
          {...props}
          disabled={disabled}
          ref={ref}
          className={clsx(
            'appearance-none outline-none cursor-pointer border-2',
            'inline-block h-4 w-4 rounded-full',
            stateStyles?.control,
            controlClassName
          )}
        />
        <span
          className={clsx(
            'rounded-full',
            'block absolute left-1/2 top-1/2 w-2 h-2',
            'transform -translate-x-1/2 -translate-y-1/2',
            'opacity-0 checked-sibling:opacity-100 transition-opacity',
            stateStyles?.indicator,
            indicatorClassName
          )}
        />
      </label>
    )
  }
)

export default Radio
