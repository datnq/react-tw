import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  useDialog
} from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { CheckOutline } from '@graywolfai/react-heroicons'

const Modals = () => {
  const [open, setOpen] = useState(false)
  const { alert, confirm } = useDialog()
  const [dialogResult, setDialogResult] = useState<boolean | undefined>()

  const openAlert = async () => {
    const result = await alert('This is an alert message')
    setDialogResult(result)
  }

  const openConfirm = async () => {
    const result = await confirm('This is an confirm message', {
      okButton: 'Yes',
      cancelButton: 'No'
    })
    setDialogResult(result)
  }

  return (
    <>
      <PageHeader title='Modals' subtitle='Modal, popup' />
      <Section title='Modal'>
        <div className='space-x-4 flex'>
          <Button
            variant='primary'
            onClick={() => {
              setOpen(true)
            }}
          >
            Open Modal
          </Button>
          <Modal
            title='This is a sample modal'
            open={open}
            onClose={() => {
              setOpen(false)
            }}
          >
            {(close: () => void) => (
              <>
                <ModalContent>
                  A fully-managed, renderless dialog component jam-packed with
                  accessibility and keyboard features, perfect for building
                  completely custom modal and dialog windows for your next
                  application
                </ModalContent>
                <ModalFooter className='justify-end'>
                  <Button onClick={close}>
                    <span>Cancel</span>
                  </Button>
                  <Button
                    variant='primary'
                    className='justify-center'
                    onClick={close}
                  >
                    <CheckOutline className='w-4 h-4' />
                    <span>OK</span>
                  </Button>
                </ModalFooter>
              </>
            )}
          </Modal>
        </div>
      </Section>
      <Section title='Dialog'>
        <div className='space-x-4 flex items-center'>
          <Button variant='danger' onClick={openAlert}>
            Alert
          </Button>
          <Button variant='primary' onClick={openConfirm}>
            Confirm
          </Button>
          {typeof dialogResult !== 'undefined' && (
            <span>You clicked: {dialogResult ? 'OK' : 'Cancel'}</span>
          )}
        </div>
      </Section>
    </>
  )
}

export default Modals
