import clsx from 'clsx'
import React, { FC } from 'react'
import Row from './Row'
import { getHeaderKey, getRowKey, getColumnKey } from './utils'
import HeaderCell from './HeaderCell'
import { useTable } from '../../hooks'

const TableConsumer: FC<{}> = () => {
  const { data, columns, options } = useTable()
  const {
    rowKey = '',
    className,
    containerClassName,
    fixedLayout = false,
    ...opts
  } = options

  return (
    <div
      className={clsx(
        'shadow overflow-hidden border-b border-gray-200 sm:rounded-lg',
        containerClassName
      )}
    >
      <table
        className={clsx('min-w-full divide-y divide-gray-200', className, {
          'table-layout-fixed': fixedLayout
        })}
        {...opts}
      >
        <colgroup>
          {columns.map((column) => (
            <col key={getColumnKey(column.id)} width={column.width} />
          ))}
        </colgroup>
        <thead className='bg-gray-50'>
          <tr>
            {columns.map((column) => (
              <HeaderCell key={getHeaderKey(column.id)} column={column} />
            ))}
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {data.map((row, index) => (
            <Row key={getRowKey(row[rowKey])} rowData={row} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableConsumer
