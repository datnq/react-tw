import clsx from 'clsx'
import React, { PropsWithChildren, ReactElement } from 'react'
import { ModalChildProps } from './types'

const ModalContent = ({
  children,
  className
}: PropsWithChildren<ModalChildProps>): ReactElement => {
  return (
    <div className={clsx('mt-4 text-gray-500 text-sm', className)}>
      {children}
    </div>
  )
}

export default ModalContent
