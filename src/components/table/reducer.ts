import { ColumnsState, ColumnsStateAction } from './types'

export const columnsReducer = (
  columns: ColumnsState,
  action: ColumnsStateAction
): ColumnsState => {
  const { type, column, index } = action
  if (type === 'add') {
    return [...columns, column]
  } else if (type === 'update' && index) {
    columns[index] = column
    return [...columns]
  }
  return columns
}
