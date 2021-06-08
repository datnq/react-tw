import clsx from 'clsx'
import React, { FC } from 'react'
import { ModalChildProps } from './types'

const ModalContent: FC<ModalChildProps> = ({ children, className }) => {
  return (
    <div className={clsx('mt-4 text-sm text-gray-600', className)}>
      {children}
    </div>
  )
}

export default ModalContent
