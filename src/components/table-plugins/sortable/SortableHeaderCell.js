import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import useSortableActions from './useSortableActions'

const SortIcon = ({ sortBy, sortDirection, sortKey }) => {
  if (!sortBy || sortBy !== sortKey) return null

  return sortDirection === 'desc' ? (
    <FaChevronDown />
  ) : (
    <FaChevronUp />
  )
}

const SelectionHeaderCell = ({ sortKey, children }) => {
  const { sorted, sort } = useSortableActions()

  const sortClick = () => {
    sort(sorted.sortDirection === 'desc' ? 'asc' : 'desc', sortKey)
  }

  return (
    <div role='button' onClick={sortClick}>
      {children}
      <SortIcon sortKey={sortKey} {...sorted} />
    </div>
  )
}

export default SelectionHeaderCell