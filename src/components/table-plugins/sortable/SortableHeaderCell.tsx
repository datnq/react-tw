import React, { FC } from 'react'
import { SortAscendingIcon, SortDescensdingIcon } from '../../icons'
import useSortableActions from './useSortableActions'

const SortIcon: FC<{
  sortBy: string
  sortDirection: string
  sortKey: string
}> = ({ sortBy, sortDirection, sortKey }) => {
  if (!sortBy || sortBy !== sortKey) return null

  return sortDirection === 'desc' ? (
    <SortDescensdingIcon className='w-4 h-4' />
  ) : (
    <SortAscendingIcon className='w-4 h-4' />
  )
}

const SelectionHeaderCell: FC<{ sortKey: string }> = ({
  sortKey,
  children
}) => {
  const { sorted, sort } = useSortableActions(sortKey)

  const sortClick = (): void => {
    sort(sorted.sortDirection === 'desc' ? 'asc' : 'desc', sortKey)
  }

  return (
    <div
      role='button'
      onClick={sortClick}
      className='cursor-pointer flex space-x-2 items-center'
    >
      <span>{children}</span>
      <SortIcon sortKey={sortKey} {...sorted} />
    </div>
  )
}

export default SelectionHeaderCell
