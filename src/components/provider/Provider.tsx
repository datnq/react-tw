import React, { PropsWithChildren, ReactElement, useState } from 'react'
import merge from 'lodash.merge'
import { defaultTheme } from '../../theme'
import { ProviderProps } from './types'
import { TwxContext } from './Context'
import { DialogProps } from '../dialog/types'
import { Dialog } from '../dialog'
import { Toaster } from '../toaster'

export default ({
  theme,
  dialogProps,
  children
}: PropsWithChildren<ProviderProps>): ReactElement => {
  const themeValue = merge(defaultTheme, theme || {})
  const [dialog, setDialog] = useState<DialogProps | {}>(dialogProps || {})

  return (
    <TwxContext.Provider
      value={{ theme: themeValue, dialog: dialog, setDialog }}
    >
      {children}
      <Dialog {...dialog} />
      <Toaster />
    </TwxContext.Provider>
  )
}
