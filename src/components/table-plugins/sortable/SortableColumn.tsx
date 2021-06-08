import React, { FC, ReactElement } from 'react'
import Column from '../../table/Column'
import { ColumnProps } from '../../table/types'
import SortableHeaderCell from './SortableHeaderCell'

interface SortableColumnProps extends ColumnProps {
  sortKey?: string
}

const SortableColumn: FC<SortableColumnProps> = ({
  sortKey,
  header,
  ...column
}) => {
  return (
    <Column
      header={(): ReactElement => (
        <SortableHeaderCell sortKey={sortKey || column.dataKey}>
          {header}
        </SortableHeaderCell>
      )}
      {...column}
    />
  )
}

export default SortableColumn
