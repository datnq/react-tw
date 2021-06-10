import clsx from 'clsx'
import React, { FC, ReactElement } from 'react'
import { Column, ColumnProps } from '../../table'
import SelectionCell from './SelectionCell'
import SelectionHeaderCell from './SelectionHeaderCell'

const SelectionColumn: FC<ColumnProps> = ({ id, className, ...props }) => {
  return (
    <Column
      id={id || '__selection__'}
      className={clsx('w-16', className)}
      header={(column): ReactElement => <SelectionHeaderCell column={column} />}
      render={({ value, column }): ReactElement => (
        <SelectionCell column={column} value={value} />
      )}
      {...props}
    >
      <SelectionCell />
    </Column>
  )
}

export default SelectionColumn
