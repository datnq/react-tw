import { Dispatch, SetStateAction } from 'react'
import { ThemeProps } from '../../theme/types'
import { DialogProps } from '../dialog'

export interface TwxContextProps {
  theme: ThemeProps
  dialog: DialogProps
  setDialog: Dispatch<SetStateAction<Partial<DialogProps>>>
}

export interface ProviderProps {
  theme?: Partial<ThemeProps>
  dialogProps?: Partial<DialogProps>
}
