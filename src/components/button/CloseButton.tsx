import clsx from 'clsx'
import React, { FC } from 'react'
import Button from './Button'
import { XIcon } from '../icons'

interface CloseButtonProps {
  onClose: () => void
  className?: string
}

const CloseButton: FC<CloseButtonProps> = ({ onClose, className }) => {
  return (
    <Button
      variant='custom'
      className={clsx(
        'text-gray-500 hover:text-gray-800 focus:outline-none transition-colors',
        className
      )}
      onClick={onClose}
    >
      <XIcon />
    </Button>
  )
}

export default CloseButton
