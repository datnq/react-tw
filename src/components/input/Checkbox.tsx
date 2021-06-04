import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { CheckboxProps } from '../../types'
import { useTheme } from '../theme-provider'

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, children, state = 'normal', disabled, ...props }, ref) => {
    const theme = useTheme()
    const stateStyles = theme?.checkbox.state[disabled ? 'disabled' : state]
    return (
      <label
        className={clsx(
          'flex items-center text-sm',
          disabled ? 'cursor-default' : 'cursor-pointer',
          {
            'pointer-events-none text-gray-400': disabled
          }
        )}
      >
        <span className='inline-flex relative'>
          <input
            type='checkbox'
            ref={ref}
            className={clsx(
              'appearance-none outline-none cursor-pointer transition-colors',
              'h-4 w-4 border-2 rounded inline-block checked:ring-2',
              stateStyles,
              className
            )}
            {...props}
          />
          <span
            className={clsx(
              'block absolute left-1/2 top-1/2 w-1 h-2 -mt-px',
              'border-2 border-white border-t-0 border-l-0',
              'transform rotate-45 -translate-x-1/2 -translate-y-1/2'
            )}
          />
        </span>
        {children && <span className='block ml-2'>{children}</span>}
      </label>
    )
  }
)

export default Checkbox
