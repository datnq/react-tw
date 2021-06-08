import React, { ChangeEventHandler, FC, useMemo } from 'react'
import { useTable } from '../../../hooks'
import { Checkbox } from '../../input'
import useSelectionActions from './useSelectionActions'
import { HeaderCellProps } from '../../table'

const SelectionHeaderCell: FC<Partial<HeaderCellProps>> = ({ column }) => {
  const { isAllSelected, forceSelect } = useSelectionActions()
  const {
    data,
    options: { rowKey }
  } = useTable()

  const selectionKey = column?.dataKey || rowKey || ''

  const dataKeys = useMemo(() => {
    return data.map((row) => String(row[selectionKey]))
  }, [data, selectionKey])

  const isChecked = isAllSelected(dataKeys)

  const selectionChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked } = e.target || {}
    forceSelect(checked ? dataKeys : [])
  }

  return (
    <Checkbox
      onChange={selectionChange}
      value={`select-all-by-${rowKey}`}
      checked={isChecked}
    />
  )
}

export default SelectionHeaderCell
