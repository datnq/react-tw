/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTableState } from '../../../hooks'

interface SortableState {
  sorted?: {
    sortDirection: string
    sortBy: string
  }
  [x: string]: any
}

interface SortableStateActions {
  sort: (sortDirection: string, sortBy: string) => void
  sorted: {
    sortDirection: string
    sortBy: string
  }
}

const useSortableActions = (sortKey: string): SortableStateActions => {
  const { state = {}, setState } = useTableState<SortableState>()
  const {
    sorted = {
      sortDirection: '',
      sortBy: ''
    }
  } = state

  const sort = (sortDirection: string, sortBy: string = sortKey): void => {
    setState &&
      setState({
        ...state,
        query: {
          ...state.query,
          skip: 0
        },
        sorted: {
          sortBy,
          sortDirection: sortDirection || 'asc'
        }
      })
  }

  return { sorted, sort }
}

export default useSortableActions
