/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties, Dispatch, ReactElement } from 'react'

export type TableData = { [x: string]: never }[]

export type ColumnAlign = 'left' | 'center' | 'right'

export interface ColumnTypeProps {
  id: string
  dataKey: string
  header?: string | ((column: ColumnTypeProps) => ReactElement)
  render?: (options: RenderCellOptions) => ReactElement
  className?: string
  style?: CSSProperties
  width?: string | number
  align?: ColumnAlign
  [x: string]: unknown
}

export interface ColumnProps {
  id?: string
  dataKey: string
  header?: string | ((column: ColumnTypeProps) => ReactElement)
  render?: (options: RenderCellOptions) => ReactElement
  className?: string
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
  tableState?: { [x: string]: any }
  setTableState?: (state: { [x: string]: any }) => void
}

export interface RowProps {
  rowData: { [x: string]: never }
  index: number
}

export interface TableContextProps<T> {
  data: TableData
  columns: ColumnsState
  dispatchColumns: Dispatch<ColumnsStateAction>
  options: Partial<TableOptions>
  state?: T & { [x: string]: any }
  setState?: (state: T & { [x: string]: any }) => void
}

export interface RenderCellOptions {
  value: any
  column: ColumnTypeProps
  rowData: { [x: string]: never }
  rowIndex: number
}

export interface RenderRowOptions {
  rowData: { [x: string]: never }
  rowIndex: number
  columns: ColumnsState
  onRowClick?: (rowData: { [x: string]: never }) => void
}

export interface TableOptions {
  rowKey: string
  onRowClick: (rowData: { [x: string]: never }) => void
  renderRow?: (rowProps: RenderRowOptions) => ReactElement
  stickyHeader: CSSProperties
  className: string
  containerClassName: string
  fixedLayout: boolean
}

export interface TableProps extends Partial<TableOptions> {
  rowKey: string
  data: TableData
  state?: { [x: string]: any }
  setState?: (state: { [x: string]: any }) => void
}

export interface CellProps {
  column: ColumnTypeProps
}

export interface DataCellProps extends CellProps {
  rowIndex: number
  rowData: { [x: string]: never }
}

export type HeaderCellProps = CellProps
