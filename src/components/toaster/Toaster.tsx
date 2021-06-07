import clsx from 'clsx'
import React, { CSSProperties } from 'react'
import { useToaster } from 'react-hot-toast'
import { ToastBar } from './ToasterBar'
import { ToasterProps } from './types'

const Toaster: React.FC<ToasterProps> = ({
  reverseOrder = true,
  position = 'top-center',
  toastOptions,
  gutter,
  children,
  containerClassName
}) => {
  const { toasts, handlers } = useToaster(toastOptions)

  return (
    <div
      className={clsx(
        'fixed z-50 top-4 left-4 right-4 bottom-4 pointer-events-none',
        containerClassName
      )}
      onMouseEnter={handlers.startPause}
      onMouseLeave={handlers.endPause}
    >
      {toasts.map((t) => {
        const toastPosition = t.position || position
        const offset = handlers.calculateOffset(t, {
          reverseOrder,
          gutter,
          defaultPosition: position
        })
        const translateStyle: CSSProperties = {
          transform: `translateY(${
            offset * (position.includes('top') ? 1 : -1)
          }px)`
        }

        const ref = (el: HTMLElement | null): void => {
          if (el && !t.height) {
            setTimeout(() => {
              const boundingRect = el.getBoundingClientRect()
              handlers.updateHeight(t.id, boundingRect.height)
            })
          }
        }

        return (
          <div
            ref={ref}
            className={clsx([
              'absolute flex left-0 right-0 transition-all',
              position.includes('top') ? 'top-0' : 'bottom-0',
              {
                'justify-center': position.includes('center'),
                'justify-end': position.includes('right'),
                'z-50': t.visible
              }
            ])}
            key={t.id}
            style={translateStyle}
          >
            {children ? (
              children(t)
            ) : (
              <ToastBar toast={t} position={toastPosition} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Toaster
