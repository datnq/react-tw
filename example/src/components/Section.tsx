import React, { PropsWithChildren } from 'react'

interface SectionProps {
  title: string
}

const Section = ({ title, children }: PropsWithChildren<SectionProps>) => {
  return (
    <section className='mb-8'>
      <header className='py-5'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>{title}</h3>
      </header>
      {children}
    </section>
  )
}

export default Section