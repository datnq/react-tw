import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { useTheme } from '../provider'
import { ButtonProps } from './types'

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
                'inline-flex items-center border shadow-sm transition-colors space-x-2 align-middle',
                'focus:outline-none focus:ring-4',
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
