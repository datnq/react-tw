import { useTable } from './useTable'

export const useTableState = <T>(): {
  state?: T
  setState: ((state: T) => void) | undefined
} => {
  const { state, setState } = useTable<T>()

  return { state, setState }
}
