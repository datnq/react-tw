import { useContext } from 'react'
import { TableContext } from '../components/table/TableContext'
import { TableContextProps } from '../components/table'

const useTable = (): TableContextProps => {
  const ctx = useContext(TableContext)

  return ctx
}

export default useTable
