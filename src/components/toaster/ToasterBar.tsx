import React, { Fragment, useMemo } from 'react'
import { ToastPosition, toast as handlers } from 'react-hot-toast'
import { ToastBarProps } from './types'
import clsx from 'clsx'
import ToastIcon from './ToastIcon'
import { CloseButton } from '../button'

const getAnimationStyle = (
  position: ToastPosition,
  visible: boolean
): string => {
  const top = position.includes('top')
  const enter = top ? 'animate-appearFromTop' : 'animate-appearFromBottom'
  const exit = top ? 'animate-disappearFromTop' : 'animate-disappearFromBottom'

  return visible ? enter : exit
}

export const ToastBar: React.FC<ToastBarProps> = React.memo(
  ({ toast, position, children }) => {
    const animationStyle = useMemo(
      () => getAnimationStyle(position || 'top-center', toast.visible),
      [toast.visible, position]
    )

    const icon = <ToastIcon toast={toast} />
    const message = (
      <div className='flex flex-auto flex-grow' {...toast.ariaProps}>
        {typeof toast.message === 'function'
          ? toast.message(toast)
          : toast.message}
      </div>
    )

    return (
      <div
        className={clsx(
          'flex items-start w-full max-w-sm p-4 text-sm space-x-4',
          'shadow-md pointer-events-auto rounded-md border border-gray-200',
          'bg-white text-gray-800 text-sm',
          animationStyle,
          toast.className
        )}
      >
        {typeof children === 'function' ? (
          children({ icon, message })
        ) : (
          <Fragment>
            {icon}
            {message}
            <CloseButton
              className='flex-shrink-0'
              onClose={(): void => {
                handlers.dismiss(toast.id)
              }}
            />
          </Fragment>
        )}
      </div>
    )
  }
)
