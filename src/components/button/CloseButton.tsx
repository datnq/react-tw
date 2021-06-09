import clsx from 'clsx'
import React, { FC, ReactElement } from 'react'
import Button from './Button'
import { XIcon } from '../icons'

interface CloseButtonProps {
  onClose: () => void
  className?: string
  icon?: ReactElement
}

const CloseButton: FC<CloseButtonProps> = ({ onClose, className, icon }) => {
  return (
    <Button
      variant='custom'
      className={clsx(
        'text-gray-500 hover:text-gray-800 focus:outline-none transition-colors',
        className
      )}
      onClick={onClose}
    >
      {icon || <XIcon />}
    </Button>
  )
}

export default CloseButton
