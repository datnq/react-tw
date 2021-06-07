import React, { Fragment, ReactElement, ReactNode } from 'react'
import { Button } from '../button'
import { Modal, ModalContent, ModalFooter, ModalTitle } from '../modal'
import DialogIcon from './DialogIcon'
import { DialogProps } from './types'

const Dialog = ({
  message,
  okButton,
  okButtonProps = { variant: 'primary' },
  cancelButton,
  cancelButtonProps,
  onOK,
  onCancel,
  showCancel,
  title,
  variant,
  ...modalProps
}: DialogProps): ReactElement => {
  const cancel = (): void => {
    onCancel && onCancel()
  }
  const ok = (): void => {
    onOK && onOK()
  }
  return (
    <Modal {...modalProps} onClose={showCancel ? cancel : ok} size='sm'>
      {(close: () => void): ReactNode => (
        <Fragment>
          {title && (
            <ModalTitle className='text-center'>
              <DialogIcon variant={variant} />
              <span>{title}</span>
            </ModalTitle>
          )}
          <ModalContent className='text-center'>{message}</ModalContent>
          <ModalFooter className='justify-center'>
            {showCancel && (
              <Button {...cancelButtonProps} className='w-24' onClick={close}>
                {cancelButton || 'Cancel'}
              </Button>
            )}
            <Button {...okButtonProps} onClick={ok} className='w-24'>
              {okButton || 'OK'}
            </Button>
          </ModalFooter>
        </Fragment>
      )}
    </Modal>
  )
}
export default Dialog
