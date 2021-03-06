import React, { forwardRef, SVGProps } from 'react'

export const SortDescensdingIcon = forwardRef<
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
      d='M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4'
    />
  </svg>
))

export const SortAscendingIcon = forwardRef<
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
      d='M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12'
    />
  </svg>
))

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

export const XIcon = forwardRef<SVGSVGElement, SVGProps<SVGAElement>>(
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
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  )
)

export const InfoIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
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
        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  )
)

export const AlertIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
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
        d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
      />
    </svg>
  )
)

export const ErrorIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
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
        d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  )
)

export const SuccessIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
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
        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  )
)

export const LoadingIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
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
        d='M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  )
)
