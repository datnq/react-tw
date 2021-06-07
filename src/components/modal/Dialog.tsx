import React, { Fragment, ReactElement, ReactNode } from 'react'
import { Button } from '../button'
import Modal from './Modal'
import ModalContent from './ModalContent'
import ModalFooter from './ModalFooter'
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
  ...modalProps
}: DialogProps): ReactElement => {
  const cancel = (): void => {
    onCancel && onCancel()
  }
  const ok = (): void => {
    onOK && onOK()
  }
  return (
    <Modal {...modalProps} onClose={showCancel ? cancel : ok}>
      {(close: () => void): ReactNode => (
        <Fragment>
          <ModalContent>{message}</ModalContent>
          <ModalFooter className='justify-center'>
            {showCancel && (
              <Button {...cancelButtonProps} onClick={close}>
                {cancelButton || 'Cancel'}
              </Button>
            )}
            <Button {...okButtonProps} onClick={ok}>
              {okButton || 'OK'}
            </Button>
          </ModalFooter>
        </Fragment>
      )}
    </Modal>
  )
}
export default Dialog
