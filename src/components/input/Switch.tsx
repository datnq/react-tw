import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { CheckboxProps } from '../../types'

const Switch = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, ...props }, ref) => {
    return (
      <label className='flex items-center text-sm cursor-pointer'>
        <span className='flex m-0 mr-2 mb-px relative'>
          <input type='checkbox' {...props} ref={ref} className='hidden' />
          <span
            className={clsx(
              'block w-9 h-4 bg-commentary rounded-full shadow-inner transition-colors',
              'checked-sibling:bg-indigo-500'
            )}
          />
          <span
            className={clsx(
              'block absolute w-6 h-6 bg-white rounded-full shadow -left-2 -top-1 transition-transform',
              'checked-sibling:transform checked-sibling:translate-x-full'
            )}
          />
        </span>
        <span className='block'>{children}</span>
      </label>
    )
  }
)

export default Switch
