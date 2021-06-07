import { Dialog, Transition } from '@headlessui/react'
import React, {
  Fragment,
  ReactElement,
  useState,
  PropsWithChildren,
  useEffect
} from 'react'
import CloseButton from './CloseButton'
import ModalContent from './ModalContent'
import ModalFooter from './ModalFooter'
import ModalTitle from './ModalTitle'
import { ModalProps } from './types'

const Modal = ({
  open = false,
  title,
  children,
  onClose
}: PropsWithChildren<ModalProps>): ReactElement => {
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
            <div className='inline-block w-full max-w-md p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl'>
              <CloseButton onClose={close} />
              {title && <ModalTitle>{title}</ModalTitle>}
              {typeof children === 'function' ? children(close) : children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

Modal.Title = ModalTitle
Modal.Content = ModalContent
Modal.Footer = ModalFooter

export default Modal
