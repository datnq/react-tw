import React, { Children, FC, useMemo, useReducer } from 'react'
import { columnsReducer } from './reducer'
import TableConsumer from './TableConsumer'
import { TableContext } from './TableContext'
import { TableProps } from './types'

const Table: FC<TableProps> = ({
  data = [],
  children,
  state,
  setState,
  ...options
}) => {
  const [columns, dispatchColumns] = useReducer(columnsReducer, [])

  const childCount = useMemo(() => Children.count(children), [children])
  const mountedFinish = useMemo(
    () => childCount && childCount === columns.length,
    [childCount, columns.length]
  )

  return (
    <TableContext.Provider
      value={{ data, columns, options, state, setState, dispatchColumns }}
    >
      {mountedFinish && <TableConsumer />}
      {children}
    </TableContext.Provider>
  )
}

export default Table
