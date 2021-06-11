import React, { useState } from 'react'
import { Button, Input, Select, SlideOut } from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'
import { ArrowRightOutline } from '@graywolfai/react-heroicons'
import Section from '../components/Section'
import { Controller, useForm } from 'react-hook-form'
import Syntax from '../components/Syntax'

const sizeOpts = [
  { key: 'xs', value: 'xs', text: 'Extra small' },
  { key: 'sm', value: 'sm', text: 'Small' },
  { key: 'md', value: 'md', text: 'Medium (default)' },
  { key: 'lg', value: 'lg', text: 'Large' },
  { key: 'xl', value: 'xl', text: 'Extra large' },
  { key: '2xl', value: '2xl', text: 'Extra large 2' },
  { key: '3xl', value: '3xl', text: 'Extra large 3' },
  { key: 'full', value: 'full', text: 'Full width' }
]

const positionOptions = [
  { key: 'l', value: 'left', text: 'Left' },
  { key: 'r', value: 'right', text: 'Right (default)' }
]

const Slideout = () => {
  const [slideOutState, setSlideOutState] = useState<{
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
    position: 'left' | 'right'
    title: string
  }>({
    size: 'md',
    position: 'right',
    title: 'Slideout panel'
  })
  const [open, setOpen] = useState(false)
  const { control, handleSubmit, watch, register } = useForm({
    defaultValues: slideOutState,
    mode: 'onChange'
  })

  const slideOutProps = watch()

  return (
    <>
      <PageHeader
        title='Slideout'
        subtitle='Side menu slide from left or right side of screen'
      />
      <Section title='Slideout menu'>
        <form onSubmit={handleSubmit(setSlideOutState)} className='space-y-4'>
          <div className='flex gap-4 flex-wrap'>
            <Input {...register('title')} containerClassName='w-full flex-grow lg:w-auto' />
            <Controller
              control={control}
              name='size'
              render={({ field }) => {
                return (
                  <Select
                    options={sizeOpts}
                    placeholder='Container size'
                    containerClassName='flex-grow w-40 md:w-40'
                    value={field.value}
                    onChange={field.onChange}
                  />
                )
              }}
            />
            <Controller
              control={control}
              name='position'
              render={({ field }) => {
                return (
                  <Select
                    options={positionOptions}
                    placeholder='Opening from'
                    containerClassName='flex-grow w-36 md:w-36'
                    value={field.value}
                    onChange={field.onChange}
                  />
                )
              }}
            />
          </div>
          <Button variant='primary' onClick={() => setOpen(true)}>
            Show menu
          </Button>
        </form>
        <SlideOut
          open={open}
          onClose={() => setOpen(false)}
          closeIcon={<ArrowRightOutline className='w-6 h-6' />}
          {...slideOutProps}
        >
          <div className='absolute inset-0 px-4 sm:px-6'>
            <div
              className='h-full border-2 border-dashed border-gray-200'
              aria-hidden='true'
            />
          </div>
        </SlideOut>
        <Syntax className='mt-8'>{`import { SlideOut } from '@datnq/react-tw'

const position = 'right' // left | right
const size = 'md' // xs | sm | md | lg | xl | 2xl | 3xl | full

const [open, setOpen] = useState(false)

<SlideOut
  open={open}
  onClose={() => setOpen(false)}
  closeIcon={<ArrowRightOutline className='w-6 h-6' />}
  size={size}
  position={position}
  title='Slideout panel'
>
  <div className='absolute inset-0 px-4 sm:px-6'>
    <div
      className='h-full border-2 border-dashed border-gray-200'
      aria-hidden='true'
    />
  </div>
</SlideOut>
        `}</Syntax>
      </Section>
    </>
  )
}

export default Slideout
