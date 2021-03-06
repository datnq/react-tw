import React from 'react'
import get from 'lodash.get'
import { DataCellProps } from './types'
import clsx from 'clsx'
import { renderNodeOrFunction } from '../../utils'

const Cell: React.FC<DataCellProps> = ({ column, rowData, rowIndex }) => {
  const value = get(rowData, column.dataKey, '')

  return (
    <td
      className={clsx(
        'p-4 whitespace-nowrap text-sm',
        {
          'text-center': column.align === 'center',
          'text-right': column.align === 'right',
          'text-left': column.align === 'left' || !column.align
        },
        column.className
      )}
      style={column.style}
    >
      {renderNodeOrFunction(
        column.render,
        {
          value,
          column,
          rowData,
          rowIndex
        },
        String(value)
      )}
    </td>
  )
}

export default Cell
