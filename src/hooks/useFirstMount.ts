import { useRef } from 'react'

export function useFirstMount(): boolean {
  const isFirst = useRef<boolean>(true)

  if (isFirst.current) {
    isFirst.current = false

    return true
  }

  return isFirst.current
}
