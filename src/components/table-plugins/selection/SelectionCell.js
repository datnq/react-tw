import { FormCheck } from '../../formControl'
import useSelectionActions from './useSelectionActions'

const SelectionCell = ({ value = '', render }) => {
	const { select, deselect, isSelected } = useSelectionActions()

	const selectionChange = e => {
		const { checked, value } = e.target || {}
		checked ? select(value) : deselect(value)
	}

	if (render) {
		return render(selectionChange, value, isSelected)
	}

	return (
		<FormCheck
			onChange={selectionChange}
			value={value}
			checked={isSelected(value)}
		/>
		// <input type='checkbox' value={value} checked={isSelected(value)} onChange={selectionChange} />
	)
}

export default SelectionCell
