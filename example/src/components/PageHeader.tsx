import React, { PropsWithChildren } from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
}

const PageHeader = ({
  title,
  subtitle
}: PropsWithChildren<PageHeaderProps>) => {
  return (
    <div className='lg:flex lg:items-center lg:justify-between mb-8'>
      <div className='flex-1 min-w-0'>
        <h2 className='text-2xl font-bold leading-7 text-gray-800 sm:text-3xl sm:truncate'>
          {title}
        </h2>
        <div className='mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6'>
          <div className='mt-2 flex items-center text-sm text-gray-500'>
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
