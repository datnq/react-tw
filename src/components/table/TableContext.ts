/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from 'react'
import { TableContextProps } from './types'

export const TableContext = createContext<TableContextProps<any>>({
  columns: [],
  data: [],
  options: {},
  dispatchColumns: () => {
    /* placeholder function */
  }
})
