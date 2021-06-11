import { useEffect, useRef, useState } from 'react'

const defaultBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1563
}

export const useScreen = (
  breakpoints = defaultBreakpoints
): {
  is: (bp: string) => boolean
  isLargeThan: (bp: string) => boolean
  isSmallerThan: (bp: string) => boolean
  isMobile: () => boolean
  isTablet: () => boolean
  isComputer: () => boolean
  isLargeScreen: () => boolean
  name: (deviceName: boolean) => string
} => {
  const size = useRef<number>(window.innerWidth)

  const breakpointIndex = (breakpoint: string): number => {
    return Object.keys(breakpoints).findIndex((bp) => bp === breakpoint)
  }

  const breakpointWidth = (index: number): number => {
    if (index < 0) return 0
    const key = Object.keys(breakpoints)[index]
    return breakpoints[key]
  }
  const is = (breakpoint: string): boolean => {
    if (!size.current) return false
    const index = breakpointIndex(breakpoint)
    if (index === -1) return false
    return (
      size.current <= breakpointWidth(index) &&
      size.current > breakpointWidth(index - 1)
    )
  }

  const getScreenName = (): string => {
    const bps = Object.keys(breakpoints)
    let bpname: string
    do {
      const n = bps.pop()
      bpname = n || 'sm'
    } while (!is(bpname) && bpname !== 'sm')
    return bpname
  }

  const [screenName, setScreenName] = useState(getScreenName())

  useEffect(() => {
    const updateWidth = (): void => {
      size.current = window.innerWidth
      if (screenName !== getScreenName()) {
        setScreenName(getScreenName())
      }
    }
    window.addEventListener('resize', updateWidth)
    return (): void => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [screenName])

  const isLargeThan = (breakpoint: string): boolean => {
    if (!size.current) return false
    const index = breakpointIndex(breakpoint)
    if (index === -1) return false
    return size.current > breakpointWidth(index)
  }

  const isSmallerThan = (breakpoint: string): boolean => {
    if (!size.current) return false
    const index = breakpointIndex(breakpoint)
    if (index === -1) return false
    return size.current < breakpointWidth(index)
  }

  const isMobile = (): boolean => is('sm')
  const isTablet = (): boolean => is('md')
  const isComputer = (): boolean => isLargeThan('md')
  const isLargeScreen = (): boolean => isLargeThan('lg')

  const name = (deviceName: false): string => {
    return !deviceName
      ? screenName
      : isLargeScreen()
      ? 'largescreen'
      : isComputer()
      ? 'computer'
      : isTablet()
      ? 'tablet'
      : 'mobile'
  }

  return {
    is,
    isLargeThan,
    isSmallerThan,
    isMobile,
    isTablet,
    isComputer,
    isLargeScreen,
    name
  }
}
