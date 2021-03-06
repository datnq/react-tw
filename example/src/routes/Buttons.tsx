import React from 'react'
import {
  PlusOutline,
  ArrowRightOutline,
  CheckOutline
} from '@graywolfai/react-heroicons'
import { Button } from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import Syntax from '../components/Syntax'

const Buttons = () => {
  return (
    <>
      <PageHeader title='Button' subtitle='Button styles and variants' />
      <Section title='Variants'>
        <div className='flex gap-2 flex-wrap'>
          <Button>Default</Button>
          <Button variant='primary'>Primary</Button>
          <Button variant='danger'>Danger</Button>
          <Button variant='success'>Success</Button>
        </div>
        <Syntax className='mt-8'>{`import { Button } from '@datnq/react-tw'

<div className='flex gap-2'>
  <Button>Default</Button>
  <Button variant='primary'>Primary</Button>
  <Button variant='danger'>Danger</Button>
  <Button variant='success'>Success</Button>
</div>`}</Syntax>
      </Section>
      <Section title='Sizes'>
        <div className='space-x-2'>
          <Button size='lg'>Large</Button>
          <Button>Medium (default)</Button>
          <Button size='sm'>Small</Button>
        </div>
        <Syntax className='mt-8'>{`import { Button } from '@datnq/react-tw'

<div className='space-x-2'>
  <Button size='lg'>Large</Button>
  <Button>Medium (default)</Button>
  <Button size='sm'>Small</Button>
</div>`}</Syntax>
      </Section>
      <Section title='With icons'>
        <div className='flex gap-2 flex-wrap'>
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
        <Syntax className='mt-8'>{`import { Button } from '@datnq/react-tw'

<div className='flex gap-2'>
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
</div>`}</Syntax>
      </Section>
    </>
  )
}

export default Buttons
