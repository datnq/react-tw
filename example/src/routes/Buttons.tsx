import React from 'react'
import {
  PlusOutline,
  ArrowRightOutline,
  CheckOutline
} from '@graywolfai/react-heroicons'
import { Button } from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'

const Buttons = () => {
  return (
    <>
      <PageHeader title='Button' subtitle='Button styles and variants' />
      <Section title='Variants'>
        <div className='space-x-2'>
          <Button>Default</Button>
          <Button variant='primary'>Primary</Button>
          <Button variant='danger'>Danger</Button>
          <Button variant='success'>Success</Button>
        </div>
      </Section>
      <Section title='Sizes'>
        <div className='space-x-2'>
          <Button size='lg'>Large</Button>
          <Button>Medium (default)</Button>
          <Button size='sm'>Small</Button>
        </div>
      </Section>
      <Section title='With icons'>
        <div className='space-x-2'>
          <Button variant='primary'>
            <PlusOutline className='w-5 h-5' />
            <span>Create new item</span>
          </Button>
          <Button>
            <span>Goto page</span>
            <ArrowRightOutline className='w-5 h-5' />
          </Button>
          <Button variant='success' narrow>
            <CheckOutline className='w-5 h-5' />
          </Button>
        </div>
      </Section>
    </>
  )
}

export default Buttons
