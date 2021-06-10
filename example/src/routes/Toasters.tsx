import React from 'react'
import { Button, toast } from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import Syntax from '../components/Syntax'

const Toasters = () => {
  return (
    <>
      <PageHeader
        title='Toasters'
        subtitle='Toaster messages and notifications'
      />
      <Section title='Toaster'>
        <div className='space-x-2'>
          <Button onClick={() => toast('Default toast message')}>
            Default
          </Button>
          <Button
            variant='success'
            onClick={() => toast.success('Congratulation! You win something')}
          >
            Success
          </Button>
          <Button
            variant='danger'
            onClick={() => toast.error('Something went wrong')}
          >
            Error
          </Button>
          <Button
            onClick={() => toast.loading('Retrieving data. Please wait...')}
          >
            Loading
          </Button>
        </div>
        <Syntax className='mt-8'>{`import { toast, Button } from '@datnq/react-tw'

<div className='space-x-2'>
  <Button onClick={() => toast('Default toast message')}>
    Default
  </Button>
  <Button variant='success' onClick={() => toast.success('Congratulation! You win something')}>
    Success
  </Button>
  <Button variant='danger' onClick={() => toast.error('Something went wrong')}>
    Error
  </Button>
  <Button onClick={() => toast.loading('Retrieving data. Please wait...')}>
    Loading
  </Button>
</div>`}</Syntax>
      </Section>
    </>
  )
}

export default Toasters
