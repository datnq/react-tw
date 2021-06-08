/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTableState } from '../../../hooks'

interface SelectionState {
  selected?: string[]
  [x: string]: any
}

interface SelectionStateActions {
  isSelected: (id: string) => boolean
  isAllSelected: (ids: string[]) => boolean
  select(id: string): void
  deselect(id: string): void
  forceSelect(ids: string[]): void
}

const useSelectionActions = (): SelectionStateActions => {
  const { state = {}, setState } = useTableState<SelectionState>()
  const { selected = [] } = state

  const actions: SelectionStateActions = {
    isSelected(id: string): boolean {
      return selected.length > 0 && selected.includes(id)
    },
    isAllSelected(ids: string[]): boolean {
      if (ids.length === 0) return false
      if (ids.length !== selected.length) return false
      return ids.every((id) => actions.isSelected(id))
    },
    select(id: string): void {
      if (!actions.isSelected(id)) {
        setState && setState({ ...state, selected: [...selected, id] })
      }
    },
    deselect(id: string): void {
      if (actions.isSelected(id)) {
        setState &&
          setState({
            ...state,
            selected: selected.filter((i) => i !== id)
          })
      }
    },
    forceSelect(ids: string[]): void {
      setState && setState({ ...state, selected: ids })
    }
  }
  return { ...actions }
}

export default useSelectionActions
