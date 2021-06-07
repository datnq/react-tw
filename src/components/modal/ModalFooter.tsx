import clsx from 'clsx'
import React, { PropsWithChildren, ReactElement } from 'react'
import { ModalChildProps } from './types'

const ModalFooter = ({
  children,
  className
}: PropsWithChildren<ModalChildProps>): ReactElement => {
  return (
    <div className={clsx('flex space-x-4 mt-8', className)}>{children}</div>
  )
}

export default ModalFooter
