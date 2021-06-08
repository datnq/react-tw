import { Dialog } from '@headlessui/react'
import clsx from 'clsx'
import React, { FC } from 'react'
import { ModalChildProps } from './types'

const ModalTitle: FC<ModalChildProps> = ({ children, className }) => {
  return (
    <Dialog.Title as='h3' className={clsx('text-lg font-bold', className)}>
      {children}
    </Dialog.Title>
  )
}

export default ModalTitle
