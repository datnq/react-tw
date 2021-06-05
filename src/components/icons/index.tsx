import React, { forwardRef, SVGProps } from 'react'

export const ChevronLeftIcon = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement>
>(({ className = 'h-5 w-5' }, ref) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    ref={ref}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M15 19l-7-7 7-7'
    />
  </svg>
))

export const ChevronRightIcon = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement>
>(({ className = 'h-5 w-5' }, ref) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    ref={ref}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M9 5l7 7-7 7'
    />
  </svg>
))

export const ChevronDownIcon = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement>
>(({ className = 'h-5 w-5' }, ref) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    ref={ref}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M19 9l-7 7-7-7'
    />
  </svg>
))

export const CalendarIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ className = 'h-5 w-5' }, ref) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      ref={ref}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
      />
    </svg>
  )
)
