import React from 'react'
import { Input, Textarea, Checkbox, Radio, Switch } from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import Syntax from '../components/Syntax'

const Inputs = () => {
  return (
    <>
      <PageHeader title='Input' subtitle='Native input controls' />
      <Section title='Text inputs'>
        <div className='space-x-2'>
          <Input placeholder='Text input' />
          <Input type='number' placeholder='Number input' />
          <Input type='password' placeholder='Password input' />
        </div>
        <Syntax className='mt-8'>{`import { Input } from '@datnq/react-tw'

<div className='space-x-2'>
  <Input placeholder='Text input' />
  <Input type='number' placeholder='Number input' />
  <Input type='password' placeholder='Password input' />
</div>`}</Syntax>
      </Section>
      <Section title='Input states'>
        <div className='space-y-4'>
          <div className='space-x-2'>
            <Input placeholder='Normal (default)' />
            <Input placeholder='Disabled' disabled />
          </div>
          <div className='space-x-2'>
            <Input placeholder='Invalid' state='invalid' />
            <Input placeholder='Valid' state='valid' />
          </div>
        </div>
        <Syntax className='mt-8'>{`import { Input } from '@datnq/react-tw'

<div className='space-y-4'>
  <div className='space-x-2'>
    <Input placeholder='Normal (default)' />
    <Input placeholder='Disabled' disabled />
  </div>
  <div className='space-x-2'>
    <Input placeholder='Invalid' state='invalid' />
    <Input placeholder='Valid' state='valid' />
  </div>
</div>`}</Syntax>
      </Section>
      <Section title='Sizes'>
        <div className='space-x-2'>
          <Input placeholder='Large' inputSize='lg' />
          <Input placeholder='Medium (default)' />
          <Input placeholder='Small' inputSize='sm' />
        </div>
        <Syntax className='mt-8'>{`import { Input } from '@datnq/react-tw'

<div className='space-x-2'>
  <Input placeholder='Large' inputSize='lg' />
  <Input placeholder='Medium (default)' />
  <Input placeholder='Small' inputSize='sm' />
</div>`}</Syntax>
      </Section>
      <Section title='Textarea'>
        <div className='space-x-2'>
          <Textarea
            rows={8}
            className='block w-full'
            placeholder='Lorem ipsum dolor sit amet...'
          />
        </div>
        <Syntax className='mt-8'>{`import { Textarea } from '@datnq/react-tw'

<div className='space-x-2'>
  <Textarea
    rows={8}
    className='block w-full'
    placeholder='Lorem ipsum dolor sit amet...'
  />
</div>`}</Syntax>
      </Section>
      <Section title='Checkbox'>
        <div className='space-x-4 flex'>
          <Checkbox />
          <Checkbox defaultChecked={true} />
          <Checkbox disabled />
          <Checkbox disabled defaultChecked={true} />
        </div>
        <Syntax className='mt-8'>{`import { Checkbox } from '@datnq/react-tw'

<div className='space-x-4 flex'>
  <Checkbox />
  <Checkbox defaultChecked={true} />
  <Checkbox disabled />
  <Checkbox disabled defaultChecked={true} />
</div>`}</Syntax>
      </Section>
      <Section title='Radio button'>
        <div className='space-x-4 flex'>
          <Radio name='radio' />
          <Radio name='radio' defaultChecked={true} />
          <Radio name='radio-disabled' disabled />
          <Radio name='radio-disabled' disabled defaultChecked={true} />
        </div>
        <Syntax className='mt-8'>{`import { Radio } from '@datnq/react-tw'

<div className='space-x-4 flex'>
  <Radio name='radio' />
  <Radio name='radio' defaultChecked={true} />
  <Radio name='radio-disabled' disabled />
  <Radio name='radio-disabled' disabled defaultChecked={true} />
</div>`}</Syntax>
      </Section>
      <Section title='Switch'>
        <div className='space-x-4 flex'>
          <Switch />
          <Switch defaultChecked={true} />
          <Switch disabled />
          <Switch disabled defaultChecked={true} placeholder='Disabled' />
        </div>
        <Syntax className='mt-8'>{`import { Switch } from '@datnq/react-tw'

<div className='space-x-4 flex'>
  <Switch />
  <Switch defaultChecked={true} />
  <Switch disabled />
  <Switch disabled defaultChecked={true} placeholder='Disabled' />
</div>`}</Syntax>
      </Section>
    </>
  )
}

export default Inputs
