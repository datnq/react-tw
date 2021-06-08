import useTableState from '../../table/useTableState'

const useSortableActions = sortKey => {
	const { state = {}, setState } = useTableState()
	const { sorted = {} } = state

	const sort = (sortDirection, sortBy = sortKey) => {
		setState({
			...state,
			query: {
				...state.query,
				skip: 0,
			},
			sorted: {
				sortBy,
				sortDirection: sortDirection || 'asc',
			},
		})
	}

	return { sorted, sort }
}

export default useSortableActions
