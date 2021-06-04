import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { useTheme } from '../theme-provider'
import { ButtonProps } from '../../types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      variant = 'default',
      size = 'md',
      narrow,
      disabled,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme()
    const variantStyles = theme?.button.variant[variant]
    const sizeStyles = theme?.button.size[narrow ? 'narrow-' + size : size]
    return (
      <button
        type={type}
        className={clsx(
          'inline-flex items-center border shadow-sm transition-colors space-x-2 align-middle',
          'focus:outline-none focus:ring-4',
          variantStyles,
          sizeStyles,
          {
            'bg-opacity-50': disabled
          }
        )}
        ref={ref}
        {...rest}
      />
    )
  }
)

export default Button
