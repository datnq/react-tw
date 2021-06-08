import React, { FC, Fragment, useEffect } from 'react'
import useTableColumns from '../../hooks/useTableColumns'
import { ColumnProps } from './types'

const Column: FC<ColumnProps> = ({ dataKey, id, ...opts }) => {
  const [columns, addColumn] = useTableColumns()

  useEffect(() => {
    const colId = id || dataKey
    if (columns.every((col) => col.id !== colId)) {
      addColumn({
        id: colId,
        dataKey,
        align: opts.align || 'left',
        ...opts
      })
    }
  }, [addColumn, columns, dataKey, id, opts])

  return <Fragment />
}

export default Column
