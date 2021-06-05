import clsx from 'clsx'
import React, { ReactNode, useRef } from 'react'
import { Button } from '../components/button'
import { ModalState } from '../components/theme-provider/types'
import { useModal } from './useModal'

export interface ModalOptions extends Partial<ModalState> {
  [x: string]: unknown
}

interface AwaitingRef {
  resolve: (value: unknown) => void
}

interface DialogOpts extends ModalOptions {
  okLabel?: string
  okClassName?: string
  cancelLabel?: string
  cancelClassName?: string
}

type DialogAction = (
  message: ReactNode | string,
  options?: DialogOpts
) => Promise<void>

interface DialogActions {
  confirm: DialogAction
  alert: DialogAction
}

export const useDialog = (): DialogActions => {
  const modal = useModal()

  const awaitingRef = useRef<AwaitingRef>()

  const dialog = (data: Partial<ModalState>): Promise<void> => {
    modal.show(data)
    return new Promise((resolve) => {
      awaitingRef.current = { resolve }
    })
  }

  const handleOk = (close: () => void) => async (): Promise<void> => {
    awaitingRef.current && (await awaitingRef.current.resolve(true))
    close()
  }
  const handleCancel = (close: () => void) => async (): Promise<void> => {
    awaitingRef.current && (await awaitingRef.current.resolve(false))
    close()
  }

  const alert: DialogAction = (message, options?) => {
    const { okLabel = 'OK', okClassName, ...opts } = options || {}

    return dialog({
      ...opts,
      content: message,
      footer: (close, focusRef) => (
        <Button
          variant='primary'
          className={clsx(okClassName)}
          onClick={handleOk(close)}
          ref={focusRef}
        >
          {okLabel}
        </Button>
      )
    })
  }

  const confirm: DialogAction = (message, options?) => {
    const {
      okLabel = 'OK',
      cancelLabel = 'Cancel',
      okClassName,
      cancelClassName,
      ...opts
    } = options || {}

    return dialog({
      ...opts,
      content: message,
      footer: (close, focusRef) => (
        <div className='flex justify-center'>
          <Button
            className={clsx(cancelClassName)}
            onClick={handleCancel(close)}
          >
            {cancelLabel}
          </Button>
          <Button
            variant='primary'
            className={clsx(okClassName)}
            onClick={handleOk(close)}
            ref={focusRef}
          >
            {okLabel}
          </Button>
        </div>
      )
    })
  }

  return { confirm, alert }
}
