import { Dialog } from '@headlessui/react'
import clsx from 'clsx'
import React, { PropsWithChildren, ReactElement } from 'react'
import { ModalChildProps } from './types'

const ModalTitle = ({
  children,
  className
}: PropsWithChildren<ModalChildProps>): ReactElement => {
  return (
    <Dialog.Title
      as='h3'
      className={clsx(
        'text-lg font-bold flex space-x-4 items-center',
        className
      )}
    >
      {children}
    </Dialog.Title>
  )
}

export default ModalTitle
