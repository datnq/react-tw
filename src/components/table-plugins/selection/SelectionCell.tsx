import React, { ChangeEventHandler, FC } from 'react'
import { Checkbox } from '../../input'
import { CellProps } from '../../table/types'
import useSelectionActions from './useSelectionActions'

const SelectionCell: FC<Partial<CellProps & { value: string }>> = ({
  value = ''
}) => {
  const { select, deselect, isSelected } = useSelectionActions()

  const selectionChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked, value } = e.target || {}
    checked ? select(String(value)) : deselect(String(value))
  }

  return (
    <Checkbox
      value={value}
      checked={isSelected(String(value))}
      onChange={selectionChange}
    />
  )
}

export default SelectionCell
