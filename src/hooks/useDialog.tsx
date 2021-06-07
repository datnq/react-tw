import { ReactNode, useContext, useRef } from 'react'
import { DialogActions, DialogProps } from '../components/dialog/types'
import { TwxContext } from '../components/provider/Context'

export const useDialog = (): DialogActions => {
  const ctx = useContext(TwxContext)
  const dialog = ctx?.dialog
  const setDialog = ctx?.setDialog

  const awaitingRef =
    useRef<{ resolve: (value: boolean | PromiseLike<boolean>) => void }>()

  const showDialog = (props: Partial<DialogProps>): Promise<boolean> => {
    setDialog && setDialog({ ...dialog, ...props, open: true })
    return new Promise((resolve) => {
      awaitingRef.current = { resolve }
    })
  }
  const hideDialog = (): void => {
    setTimeout(() => {
      setDialog && setDialog({ open: false })
    }, 200)
  }

  const handleOk = async (): Promise<void> => {
    awaitingRef.current && (await awaitingRef.current.resolve(true))
    hideDialog()
  }
  const handleCancel = async (): Promise<void> => {
    awaitingRef.current && (await awaitingRef.current.resolve(false))
    hideDialog()
  }

  const alert = (
    message: ReactNode,
    options: DialogProps = {}
  ): Promise<boolean> => {
    return showDialog({
      ...options,
      message,
      onOK: handleOk
    })
  }

  const confirm = (
    message: ReactNode,
    options: DialogProps = {}
  ): Promise<boolean> => {
    return showDialog({
      ...options,
      message,
      onOK: handleOk,
      onCancel: handleCancel,
      showCancel: true
    })
  }

  return { confirm, alert }
}
