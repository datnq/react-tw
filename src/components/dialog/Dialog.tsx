import React, { FC, Fragment, ReactNode } from 'react'
import { Button } from '../button'
import { Modal, ModalContent, ModalFooter, ModalTitle } from '../modal'
import DialogIcon from './DialogIcon'
import { DialogProps } from './types'

const Dialog: FC<DialogProps> = ({
  message,
  okButton,
  okButtonProps = { variant: 'primary' },
  cancelButton,
  cancelButtonProps,
  onOK,
  onCancel,
  showCancel,
  onClose,
  title,
  variant,
  ...modalProps
}) => {
  const cancel = (close: () => void): void => {
    onCancel && onCancel()
    close()
  }
  const ok = (close: () => void): void => {
    onOK && onOK()
    close()
  }
  return (
    <Modal {...modalProps} onClose={onClose} size='sm'>
      {(close: () => void): ReactNode => (
        <Fragment>
          <div className='text-center'>
            <DialogIcon variant={variant} />
          </div>
          {title && (
            <ModalTitle className='text-center'>
              <span>{title}</span>
            </ModalTitle>
          )}
          <ModalContent className='text-center'>{message}</ModalContent>
          <ModalFooter className='justify-center'>
            {showCancel && (
              <Button
                {...cancelButtonProps}
                className='w-24'
                onClick={(): void => cancel(close)}
              >
                {cancelButton || 'Cancel'}
              </Button>
            )}
            <Button
              {...okButtonProps}
              onClick={(): void => ok(close)}
              className='w-24'
            >
              {okButton || 'OK'}
            </Button>
          </ModalFooter>
        </Fragment>
      )}
    </Modal>
  )
}
export default Dialog
