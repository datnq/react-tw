import clsx from 'clsx'
import React from 'react'
import { useTable } from '../../hooks'
import { HeaderCellProps } from './types'
import { getHeaderKey } from './utils'

const HeaderCell: React.FC<HeaderCellProps> = ({ column }) => {
  const { options } = useTable()
  const { stickyHeader } = options
  return (
    <th
      key={getHeaderKey(column.id)}
      style={stickyHeader}
      scope='col'
      className={clsx(
        'p-4 text-xs font-medium text-gray-500 uppercase tracking-wider',
        {
          'text-center': column.align === 'center',
          'text-right': column.align === 'right',
          'text-left': column.align === 'left' || !column.align
        },
        column.className
      )}
    >
      {typeof column.header === 'function'
        ? column.header(column)
        : column.header}
    </th>
  )
}

export default HeaderCell
