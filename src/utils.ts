/* eslint-disable @typescript-eslint/no-explicit-any */
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
