import React, { FC, ReactNode } from 'react'

interface FieldProps {
  label?: ReactNode
  error?: ReactNode
}

export const Field: FC<FieldProps> = ({ label, children, error }) => {
  return (
    <div>
      {label && (
        <label className='block text-sm font-medium text-gray-700'>
          {label}
        </label>
      )}
      <div className='mt-1 relative'>{children}</div>
    </div>
  )
}
