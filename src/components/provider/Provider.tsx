import React, { FC, useState } from 'react'
import merge from 'lodash.merge'
import { defaultTheme } from '../../theme'
import { ProviderProps } from './types'
import { TwxContext } from './Context'
import { Dialog, DialogProps } from '../dialog'
import { Toaster } from '../toaster'

const Provider: FC<ProviderProps> = ({ theme, dialogProps, children }) => {
  const themeValue = merge(defaultTheme, theme || {})
  const [dialog, setDialog] = useState<DialogProps | {}>(dialogProps || {})

  const closeDialog = (): void => {
    setTimeout(() => {
      setDialog && setDialog({ open: false })
    }, 300)
  }

  return (
    <TwxContext.Provider
      value={{ theme: themeValue, dialog: dialog, setDialog }}
    >
      {children}
      <Dialog {...dialog} onClose={closeDialog} />
      <Toaster />
    </TwxContext.Provider>
  )
}

export default Provider
