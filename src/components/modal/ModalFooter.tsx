import clsx from 'clsx'
import React, { FC } from 'react'
import { ModalChildProps } from './types'

const ModalFooter: FC<ModalChildProps> = ({ children, className }) => {
  return (
    <div className={clsx('flex space-x-4 mt-8', className)}>{children}</div>
  )
}

export default ModalFooter
