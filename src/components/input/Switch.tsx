import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { useTheme } from '../../hooks'
import { CheckboxProps } from './types'

const Switch = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      state = 'normal',
      className,
      controlClassName,
      indicatorClassName,
      disabled,
      placeholder,
      ...props
    },
    ref
  ) => {
    const theme = useTheme('switch')
    const stateStyles = theme?.state[disabled ? 'disabled' : state]
    return (
      <label
        className={clsx(
          'inline-flex relative align-middle items-center text-sm space-x-2',
          { 'pointer-events-none': disabled, 'cursor-pointer': !disabled },
          className
        )}
      >
        <span className='relative align-middle inline-flex flex-shrink-0'>
          <input
            type='checkbox'
            {...props}
            ref={ref}
            className='hidden'
            disabled={disabled}
          />
          <span
            className={clsx(
              'block w-8 h-4 rounded-full shadow-inner transition-colors',
              stateStyles?.control,
              controlClassName
            )}
          />
          <span
            className={clsx(
              'block absolute w-4 h-4 rounded-full shadow left-px top-px transition-transform',
              'checked-sibling:transform checked-sibling:translate-x-full',
              stateStyles?.indicator,
              indicatorClassName
            )}
          />
        </span>
        {placeholder && <span>{placeholder}</span>}
      </label>
    )
  }
)

export default Switch
