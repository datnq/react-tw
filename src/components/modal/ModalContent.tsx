import clsx from 'clsx'
import React, { PropsWithChildren, ReactElement } from 'react'
import { ModalChildProps } from './types'

const ModalContent = ({
  children,
  className
}: PropsWithChildren<ModalChildProps>): ReactElement => {
  return (
    <div className={clsx('mt-4 text-sm text-gray-600', className)}>
      {children}
    </div>
  )
}

export default ModalContent
