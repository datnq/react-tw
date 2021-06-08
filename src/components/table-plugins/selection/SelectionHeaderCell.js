import { useMemo } from 'react'
import useTable from '../../table/useTable'
import useSelectionActions from './useSelectionActions'
import { FormCheck } from '../../formControl'

const SelectionHeaderCell = ({ column, render }) => {
  const { isAllSelected, forceSelect } = useSelectionActions()
  const {
    data,
    options: { rowKey },
  } = useTable()

  const selectionKey = column?.dataKey || rowKey

  const dataKeys = useMemo(() => {
    return data.map(row => row[selectionKey].toString())
  }, [data, selectionKey])

  const isChecked = useMemo(() => isAllSelected(dataKeys), [
    dataKeys,
    isAllSelected,
  ])

  const selectionChange = e => {
    const { checked } = e.target || {}
    forceSelect(checked ? dataKeys : [])
  }

	if (render) {
		return render(selectionChange, isChecked)
	}

  return (
    <FormCheck
      onChange={selectionChange}
      value={`select-all-by-${rowKey}`}
      checked={isChecked}
    />
  )
}

export default SelectionHeaderCell
