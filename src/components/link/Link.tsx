import clsx from 'clsx'
import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

const Link = forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<'a'>>(
  ({ className, ...props }, ref) => {
    return (
      <a
        className={clsx('text-blue-500 hover:text-blue-600', className)}
        {...props}
        ref={ref}
      />
    )
  }
)

export default Link
