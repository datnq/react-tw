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
        <div className='flex flex-col gap-2 md:flex-row'>
          <Input placeholder='Text input' containerClassName='w-full' />
          <Input
            type='number'
            placeholder='Number input'
            containerClassName='w-full'
          />
          <Input
            type='password'
            placeholder='Password input'
            containerClassName='w-full'
          />
        </div>
        <Syntax className='mt-8'>{`import { Input } from '@datnq/react-tw'

<div className='flex flex-col gap-2 md:flex-row'>
  <Input placeholder='Text input' containerClassName='w-full' />
  <Input type='number' placeholder='Number input' containerClassName='w-full' />
  <Input type='password' placeholder='Password input' containerClassName='w-full' />
</div>`}</Syntax>
      </Section>
      <Section title='Input states'>
        <div className='space-y-2'>
          <div className='flex gap-2 flex-col md:flex-row'>
            <Input placeholder='Normal (default)' containerClassName='w-full' />
            <Input
              placeholder='Disabled'
              disabled
              containerClassName='w-full'
            />
          </div>
          <div className='flex gap-2 flex-col md:flex-row'>
            <Input
              placeholder='Invalid'
              state='invalid'
              containerClassName='w-full'
            />
            <Input
              placeholder='Valid'
              state='valid'
              containerClassName='w-full'
            />
          </div>
        </div>
        <Syntax className='mt-8'>{`import { Input } from '@datnq/react-tw'

<div className='space-y-2'>
  <div className='flex gap-2 flex-col md:flex-row'>
    <Input placeholder='Normal (default)' containerClassName='w-full' />
    <Input placeholder='Disabled' disabled containerClassName='w-full' />
  </div>
  <div className='flex gap-2 flex-col md:flex-row'>
    <Input placeholder='Invalid' state='invalid' containerClassName='w-full' />
    <Input placeholder='Valid' state='valid' containerClassName='w-full' />
  </div>
</div>`}</Syntax>
      </Section>
      <Section title='Sizes'>
        <div className='space-y-2'>
          <Input
            placeholder='Large'
            inputSize='lg'
            containerClassName='w-full'
          />
          <Input placeholder='Medium (default)' containerClassName='w-full' />
          <Input
            placeholder='Small'
            inputSize='sm'
            containerClassName='w-full'
          />
        </div>
        <Syntax className='mt-8'>{`import { Input } from '@datnq/react-tw'

<div className='space-y-2'>
  <Input placeholder='Large' inputSize='lg' containerClassName='w-full' />
  <Input placeholder='Medium (default)' containerClassName='w-full' />
  <Input placeholder='Small' inputSize='sm' containerClassName='w-full' />
</div>`}</Syntax>
      </Section>
      <Section title='Textarea'>
        <Textarea
          rows={8}
          className='block w-full'
          placeholder='Lorem ipsum dolor sit amet...'
        />
        <Syntax className='mt-8'>{`import { Textarea } from '@datnq/react-tw'

<Textarea
  rows={8}
  className='block w-full'
  placeholder='Lorem ipsum dolor sit amet...'
/>`}</Syntax>
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
