import { CSSProperties, Dispatch, ReactElement, ReactNode } from 'react'

export type TableData = { [x: string]: never }[]

export type ColumnAlign = 'left' | 'center' | 'right'

export interface ColumnTypeProps {
  id: string
  dataKey: string
  header?: ReactNode
  className?: string
  render?: (value: never, column: ColumnRenderOptions) => ReactElement
  style?: CSSProperties
  width?: string | number
  align?: ColumnAlign
  [x: string]: unknown
}

export interface ColumnProps {
  id?: string
  dataKey: string
  header?: ReactNode
  className?: string
  render?: (value: never, column: ColumnRenderOptions) => ReactElement
  style?: CSSProperties
  width?: string | number
  align?: ColumnAlign
  [x: string]: unknown
}

export type ColumnsState = ColumnTypeProps[]

export interface ColumnsStateAction {
  type: 'add' | 'update'
  column: ColumnTypeProps
  index?: number
}

export interface ColumnRenderOptions {
  column: ColumnTypeProps
  rowData: { [x: string]: never }
  rowIndex: number
  tableState?: { [x: string]: never }
  setTableState?: (state: { [x: string]: never }) => void
}

export interface RowProps {
  rowData: { [x: string]: never }
  index: number
}

export interface TableContextProps {
  data: TableData
  columns: ColumnsState
  dispatchColumns: Dispatch<ColumnsStateAction>
  options: TableOptions
  state?: { [x: string]: never }
  setState?: (state: { [x: string]: never }) => void
}

export interface RenderRowOptions {
  rowData: { [x: string]: never }
  rowIndex: number
  columns: ColumnsState
  onRowClick?: (rowData: { [x: string]: never }) => void
}

export interface TableOptions {
  rowKey?: string
  onRowClick?: (rowData: { [x: string]: never }) => void
  renderRow?: ({ rowData, rowIndex }: RenderRowOptions) => ReactElement
  stickyHeader?: CSSProperties
  className?: string
  containerClassName?: string
  fixedLayout?: boolean
}

export interface TableProps extends TableOptions {
  data: TableData
  state?: { [x: string]: never }
  setState?: (state: { [x: string]: never }) => void
}

export interface CellProps {
  column: ColumnTypeProps
}

export interface DataCellProps extends CellProps {
  rowIndex: number
  rowData: { [x: string]: never }
}

export type HeaderCellProps = CellProps
