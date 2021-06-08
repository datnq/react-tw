import { ColumnsState, ColumnTypeProps } from '../components/table'
import useTable from './useTable'

const useTableColumns = (): [
  ColumnsState,
  (column: ColumnTypeProps) => void,
  (index: number, column: ColumnTypeProps) => void
] => {
  const { columns, dispatchColumns } = useTable()
  const addColumn = (column: ColumnTypeProps): void => {
    dispatchColumns({ type: 'add', column })
  }
  const updateColumn = (index: number, column: ColumnTypeProps): void => {
    dispatchColumns({ type: 'update', column, index })
  }

  return [columns, addColumn, updateColumn]
}

export default useTableColumns
