import { Dialog, Transition } from '@headlessui/react'
import React, {
  Fragment,
  ReactElement,
  useEffect,
  useRef,
  useState
} from 'react'
import { useModal } from '../../hooks'
import { variantIcons } from '../icons'

interface ModalProps {
  onClose: () => void
}

const Modal = ({ onClose }: ModalProps): ReactElement => {
  const modal = useModal()
  const { show, title, id, content, footer, variant } = modal.get()

  const [open, setOpen] = useState(false)

  const closeTimeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    closeTimeout.current && clearTimeout(closeTimeout.current)
    setOpen(!!show)
  }, [show])

  const close = (): void => {
    setOpen(false)
    closeTimeout.current = setTimeout(() => {
      onClose()
    }, 200)
  }

  const focusRef = useRef<HTMLButtonElement>(null)

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as='div'
        id={id}
        className='fixed inset-0 z-20 overflow-y-auto text-center'
        open={open}
        onClose={close}
        initialFocus={focusRef}
      >
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
        <span className='inline-block h-screen align-middle' aria-hidden='true'>
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
            {title && (
              <Dialog.Title
                as='h3'
                className='text-lg font-bold flex space-x-4 items-center'
              >
                {variant && variantIcons[variant]}
                <span>{title}</span>
              </Dialog.Title>
            )}
            <div className='mt-4 text-gray-500 text-sm'>{content}</div>
            {typeof footer === 'function' ? (
              <div className='mt-8'>{footer(close, focusRef)}</div>
            ) : (
              footer
            )}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default Modal
