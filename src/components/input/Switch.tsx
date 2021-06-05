import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { CheckboxProps } from '../../types'
import { useTheme } from '../theme-provider'

const Switch = forwardRef<HTMLInputElement, CheckboxProps>(
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
    const theme = useTheme()
    const stateStyles = theme?.switch.state[disabled ? 'disabled' : state]
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
          {...props}
          ref={ref}
          className='hidden'
          disabled={disabled}
        />
        <span
          className={clsx(
            'block w-9 h-4 rounded-full shadow-inner transition-colors',
            stateStyles?.control,
            controlClassName
          )}
        />
        <span
          className={clsx(
            'block absolute w-6 h-6 rounded-full shadow -left-2 -top-1 transition-transform',
            'checked-sibling:transform checked-sibling:translate-x-full',
            stateStyles?.indicator,
            indicatorClassName
          )}
        />
      </label>
    )
  }
)

export default Switch
