export const getHeaderKey = (colId: string): string => `table-header-${colId}`
export const getColumnKey = (colId: string): string => `table-col-${colId}`
export const getRowKey = (rowId: string | number): string =>
  `table-row-${rowId}`
export const getCellKey = (rowId: string | number, colId: string): string =>
  `table-cell-${rowId}-${colId}`
