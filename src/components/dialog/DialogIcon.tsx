import clsx from 'clsx'
import React, { FC } from 'react'
import { AlertIcon, ErrorIcon, InfoIcon, SuccessIcon } from '../icons'
import { DialogIconProps } from './types'

const defaultClassName = 'w-16 h-16 mx-auto mb-4'

const DialogIcon: FC<DialogIconProps> = ({ variant = 'info', className }) => {
  switch (variant) {
    case 'info':
      return (
        <InfoIcon
          className={clsx('text-blue-500', defaultClassName, className)}
        />
      )
    case 'warn':
      return (
        <AlertIcon
          className={clsx('text-yellow-300', defaultClassName, className)}
        />
      )
    case 'danger':
      return (
        <AlertIcon
          className={clsx('text-red-500', defaultClassName, className)}
        />
      )
    case 'error':
      return (
        <ErrorIcon
          className={clsx('text-red-500', defaultClassName, className)}
        />
      )
    case 'success':
      return (
        <SuccessIcon
          className={clsx('text-green-500', defaultClassName, className)}
        />
      )
    default:
      return null
  }
}

export default DialogIcon
