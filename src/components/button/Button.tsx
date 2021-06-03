import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'primary' | 'negative'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { type = 'button', variant = 'default', ...rest } = props
  console.log(variant)
  return (
    <button
      type={type}
      className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      ref={ref}
      {...rest}
    />
  )
})

export default Button
