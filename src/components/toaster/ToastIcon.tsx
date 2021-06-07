import clsx from 'clsx'
import React, { Fragment } from 'react'
import { ErrorIcon, InfoIcon, LoadingIcon, SuccessIcon } from '../icons'
import { ToastIconProps } from './types'

const defaultClassName = 'w-5 h-5 flex-shrink-0 top-px'

const ToastIcon: React.FC<ToastIconProps> = ({ toast, className }) => {
  switch (toast.type) {
    case 'blank':
      return (
        <InfoIcon
          className={clsx('text-blue-500', defaultClassName, className)}
        />
      )
    case 'loading':
      return (
        <LoadingIcon
          className={clsx(
            'text-gray-500 animate-pulse',
            defaultClassName,
            className
          )}
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
    case 'custom':
      return typeof toast.icon !== undefined ? (
        <Fragment>{toast.icon}</Fragment>
      ) : null
    default:
      return null
  }
}

export default ToastIcon
