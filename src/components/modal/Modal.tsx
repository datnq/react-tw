import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { Fragment, useState, useEffect, FC } from 'react'
import { renderNodeOrFunction } from '../../utils'
import { CloseButton } from '../button'
import ModalTitle from './ModalTitle'
import { ModalProps } from './types'

const sizes = {
  full: 'max-w-full',
  xl: 'max-w-xl',
  lg: 'max-w-lg',
  md: 'max-w-md',
  sm: 'max-w-sm',
  xs: 'max-w-xs'
}

const Modal: FC<ModalProps> = ({
  open = false,
  title,
  children,
  onClose,
  size = 'md'
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const close = (): void => {
    setIsOpen(false)
    onClose && onClose()
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-20 overflow-y-auto text-center'
        onClose={close}
      >
        <div className='min-h-screen px-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-40' />
          </Transition.Child>
          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div
              className={clsx(
                'inline-block w-full px-8 py-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl',
                sizes[size]
              )}
            >
              <CloseButton onClose={close} className='absolute top-4 right-4' />
              {title && <ModalTitle>{title}</ModalTitle>}
              {renderNodeOrFunction(children, close)}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
