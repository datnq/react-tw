import React, { FC } from 'react'
import get from 'lodash.get'
import { DataCellProps } from './types'
import clsx from 'clsx'
import useTable from '../../hooks/useTable'

const Cell: FC<DataCellProps> = ({ column, rowData, rowIndex }) => {
  const value = get(rowData, column.dataKey)
  const { state, setState } = useTable()

  return (
    <td
      className={clsx(
        'px-4 py-2 whitespace-nowrap text-sm',
        {
          'text-center': column.align === 'center',
          'text-right': column.align === 'right',
          'text-left': column.align === 'left' || !column.align
        },
        column.className
      )}
      style={column.style}
    >
      {typeof column.render === 'function'
        ? column.render(value, {
            column,
            rowData,
            rowIndex,
            tableState: state,
            setTableState: setState
          })
        : value}
    </td>
  )
}

export default Cell
