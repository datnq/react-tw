import useTable from './useTable'

const useTableState = (): {
  state: { [x: string]: never } | undefined
  setState: ((state: { [x: string]: never }) => void) | undefined
} => {
  const { state, setState } = useTable()

  return { state, setState }
}

export default useTableState
