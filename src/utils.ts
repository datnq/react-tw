import { ReactNode } from 'react'

export const getInitials = (name: string): string => {
  if (!name) return ''

  const parts = name
    .replace(/[^\p{L}\s]|_|\d/gu, '')
    .replace(/\s+/g, ' ')
    .replace(/^\s+|\s+$/g, '')
    .split(' ')

  const initials =
    parts.length === 1
      ? parts[0].substring(0, 2)
      : parts[0].charAt(0) + parts[parts.length - 1].charAt(0)
  return initials.toUpperCase()
}

export const splitToRows = <T>(array: T[], numberOfColumns: number): T[][] => {
  const result: T[][] = [[]]
  array.forEach((item, index) => {
    const currentIndex = result.length - 1
    const expectedIndex = Math.floor(index / numberOfColumns)
    if (expectedIndex === currentIndex) {
      result[currentIndex].push(item)
    } else {
      result.push([item])
    }
  })
  return result
}

export const renderNodeOrFunction = <T>(
  element: ReactNode | ((x?: T) => ReactNode),
  args?: T,
  fallback?: string | ReactNode
): ReactNode => {
  return typeof element === 'function' ? element(args) : fallback || element
}

export const getDataUrl = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (): void => {
      resolve(reader.result)
    }
    reader.onerror = (error): void => {
      reject(error)
    }
  })
