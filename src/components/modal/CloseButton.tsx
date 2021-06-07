import React, { ReactElement } from 'react'
import { Button } from '../button'
import { XIcon } from '../icons'

interface CloseButtonProps {
  onClose: () => void
}

const CloseButton = ({ onClose }: CloseButtonProps): ReactElement => {
  return (
    <Button
      variant='custom'
      className='absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none transition-colors'
      onClick={onClose}
    >
      <XIcon />
    </Button>
  )
}

export default CloseButton
