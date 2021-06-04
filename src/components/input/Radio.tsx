import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { CheckboxProps } from '../../types'
import { useTheme } from '../theme-provider'

const Radio = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, state = 'normal', disabled, ...props }, ref) => {
    const theme = useTheme()
    const stateStyles = theme?.radio.state[disabled ? 'disabled' : state]
    return (
      <label className='flex items-center text-sm cursor-pointer'>
        <span className='flex m-0 mr-2 mb-px relative'>
          <input
            type='radio'
            {...props}
            ref={ref}
            className={clsx(
              'appearance-none outline-none cursor-pointer border-2',
              'inline-block h-4 w-4 rounded-full',
              stateStyles
            )}
          />
          <span
            className={clsx(
              'bg-indigo-500',
              'block absolute left-1/2 top-1/2 w-2 h-2',
              'rounded-full',
              'transform -translate-x-1/2 -translate-y-1/2',
              'opacity-0 checked-sibling:opacity-100 transition-opacity',
              'checked-sibling:bg-gray-300'
            )}
          />
        </span>
        <span className='block'>{children}</span>
      </label>
    )
  }
)

export default Radio
