import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { FC, Fragment } from 'react'
import { CloseButton } from '../button'
import { SlideOutProps } from './types'

const SlideOut: FC<SlideOutProps> = ({
  open,
  size = 'md',
  position = 'right',
  onClose,
  closeIcon,
  title,
  children
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 overflow-hidden'
        open={open}
        onClose={onClose}
      >
        <div className='absolute inset-0 overflow-hidden'>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>
          <div
            className={clsx(
              'fixed inset-y-0 max-w-full flex',
              position === 'right' ? 'right-0 md:pl-10' : 'left-0 md:pr-10'
            )}
          >
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom={clsx(
                position === 'right' ? 'translate-x-full' : '-translate-x-full'
              )}
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo={clsx(
                position === 'right' ? 'translate-x-full' : '-translate-x-full'
              )}
            >
              <div
                className={clsx('relative w-screen', {
                  'max-w-xs': size === 'xs',
                  'max-w-sm': size === 'sm',
                  'max-w-md': size === 'md',
                  'max-w-lg': size === 'lg',
                  'max-w-xl': size === 'xl',
                  'max-w-2xl': size === '2xl',
                  'max-w-3xl': size === '3xl',
                  'max-w-full': size === 'full'
                })}
              >
                <div className='absolute top-7 right-6 flex'>
                  <CloseButton
                    icon={closeIcon}
                    className='rounded-full text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                    aria-hidden='true'
                    onClose={onClose}
                  />
                </div>
                <div className='h-full flex flex-col py-6 bg-white shadow-xl overflow-x-hidden'>
                  <div className='px-4 sm:px-6'>
                    <Dialog.Title className='text-lg font-medium text-gray-900'>
                      {title}
                    </Dialog.Title>
                  </div>
                  <div className='mt-6 relative flex-1 px-4 sm:px-6'>
                    {children}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SlideOut
