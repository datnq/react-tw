import get from 'lodash.get'
import React, { FC } from 'react'
import useTable from '../../hooks/useTable'
import Cell from './Cell'
import { RowProps } from './types'
import { getCellKey } from './utils'

const Row: FC<RowProps> = ({ rowData, index }) => {
  const {
    columns,
    options: { rowKey = '', onRowClick, renderRow }
  } = useTable()

  return (
    <tr
      onClick={(): void => {
        if (onRowClick) onRowClick(rowData)
      }}
    >
      {typeof renderRow === 'function'
        ? renderRow({ rowData, rowIndex: index, columns, onRowClick })
        : columns.map((column) => {
            const rowId = get(rowData, rowKey)
            return (
              <Cell
                key={getCellKey(rowId, column.id)}
                column={column}
                rowData={rowData}
                rowIndex={index}
              />
            )
          })}
    </tr>
  )
}
export default Row
