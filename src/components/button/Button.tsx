import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { ButtonProps } from './types'
import { useTheme } from '../../hooks'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      variant = 'default',
      size = 'md',
      narrow,
      disabled,
      className,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme('button')
    const variantStyles = theme?.variant[variant]
    const sizeStyles = theme?.size[narrow ? 'narrow-' + size : size]

    return (
      <button
        type={type}
        className={
          variant !== 'custom'
            ? clsx(
                'inline-flex items-center border shadow-sm transition space-x-2 align-middle justify-center',
                'focus:outline-none focus:ring-4 min-w-max rounded-md',
                variantStyles,
                sizeStyles,
                { 'bg-opacity-50': disabled },
                className
              )
            : className
        }
        ref={ref}
        {...rest}
      />
    )
  }
)

export default Button
