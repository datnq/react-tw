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
import { DialogVariant } from '../../../dist/components/dialog'
import Syntax from '../components/Syntax'

const Modals = () => {
  const [open, setOpen] = useState(false)
  const { alert, confirm } = useDialog()
  const [dialogResult, setDialogResult] = useState<boolean | undefined>()

  const openAlert = async (variant?: DialogVariant) => {
    const result = await alert(
      'Little Widgets contains 24 thoughtful, professionally designed HTML5/CSS3 website popups and widgets.',
      { title: 'Attention!', variant }
    )
    setDialogResult(result)
  }

  const openConfirm = async () => {
    const result = await confirm('This is an confirm message', {
      okButton: 'Yes',
      cancelButton: 'No',
      variant: 'info',
      title: 'Confirm'
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
            {(close?: () => void) => (
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
        <Syntax className='mt-8'>{`import { Button, Modal, ModalContent, ModalFooter } from '@datnq/react-tw'

const [open, setOpen] = useState(false)

<div className='space-x-4 flex'>
  <Button variant='primary' onClick={() => { setOpen(true) }}>
    Open Modal
  </Button>
  <Modal title='This is a sample modal' open={open} onClose={() => { setOpen(false) }}>
    {(close) => (
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
          <Button variant='primary' className='justify-center' onClick={close} >
            <CheckOutline className='w-4 h-4' />
            <span>OK</span>
          </Button>
        </ModalFooter>
      </>
    )}
  </Modal>
</div>
`}</Syntax>
      </Section>
      <Section title='Dialog'>
        <div className='space-x-4 flex items-center'>
          <Button variant='danger' onClick={() => openAlert()}>
            Alert
          </Button>
          <Button variant='primary' onClick={openConfirm}>
            Confirm
          </Button>
          {typeof dialogResult !== 'undefined' && (
            <span>You clicked: {dialogResult ? 'OK' : 'Cancel'}</span>
          )}
        </div>
        <Syntax className='mt-8'>{`import { Button, useDialog } from '@datnq/react-tw'

const { alert, confirm } = useDialog()
const [dialogResult, setDialogResult] = useState()

const openAlert = async (variant) => {
  const result = await alert(
    'Little Widgets contains 24 thoughtful, professionally designed HTML5/CSS3 website popups and widgets.',
    { title: 'Attention!', variant }
  )
  setDialogResult(result)
}

const openConfirm = async () => {
  const result = await confirm('This is an confirm message', {
    okButton: 'Yes',
    cancelButton: 'No',
    variant: 'info',
    title: 'Confirm'
  })
  setDialogResult(result)
}

<div className='space-x-4 flex items-center'>
  <Button variant='danger' onClick={() => openAlert()}>
    Alert
  </Button>
  <Button variant='primary' onClick={openConfirm}>
    Confirm
  </Button>
  {typeof dialogResult !== 'undefined' && (
    <span>You clicked: {dialogResult ? 'OK' : 'Cancel'}</span>
  )}
</div>`}</Syntax>
      </Section>
      <Section title='Dialog variants'>
        <div className='gap-2 flex items-center'>
          <Button onClick={() => openAlert('warn')}>Warning</Button>
          <Button onClick={() => openAlert('info')}>Info</Button>
          <Button onClick={() => openAlert('danger')}>Danger</Button>
          <Button onClick={() => openAlert('error')}>Error</Button>
          <Button onClick={() => openAlert('success')}>Success</Button>
        </div>
      </Section>
      <Syntax className='mt-8'>{`import { Button, useDialog } from '@datnq/react-tw'

const { alert } = useDialog()

<div className='gap-2 flex items-center'>
  <Button onClick={() => openAlert('warn')}>Warning</Button>
  <Button onClick={() => openAlert('info')}>Info</Button>
  <Button onClick={() => openAlert('danger')}>Danger</Button>
  <Button onClick={() => openAlert('error')}>Error</Button>
  <Button onClick={() => openAlert('success')}>Success</Button>
</div>`}</Syntax>
    </>
  )
}

export default Modals
