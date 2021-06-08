import { useContext } from 'react'
import { TableContext } from '../components/table/TableContext'
import { TableContextProps } from '../components/table'

export const useTable = <T>(): TableContextProps<T> => {
  const ctx = useContext(TableContext)

  return ctx
}
