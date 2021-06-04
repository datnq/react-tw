import React from 'react'
import { Input, Textarea, Checkbox, Radio, Switch } from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'

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
      </Section>
      <Section title='Sizes'>
        <div className='space-x-2'>
          <Input placeholder='Large' inputSize='lg' />
          <Input placeholder='Medium (default)' />
          <Input placeholder='Small' inputSize='sm' />
        </div>
      </Section>
      <Section title='Textarea'>
        <div className='space-x-2'>
          <Textarea
            rows={8}
            className='block w-full'
            placeholder='Lorem ipsum dolor sit amet...'
          />
        </div>
      </Section>
      <Section title='Checkbox'>
        <div className='space-y-4 flex flex-col'>
          <Checkbox>Check this</Checkbox>
          <Checkbox defaultChecked={true}>And this</Checkbox>
          <Checkbox disabled>&hellip; but not this</Checkbox>
          <Checkbox disabled defaultChecked={true}>
            &hellip; nor this
          </Checkbox>
        </div>
      </Section>
      <Section title='Radio button'>
        <div className='space-y-4 flex flex-col'>
          <div className='flex space-x-4'>
            <Radio name='radio'>Check this</Radio>
            <Radio name='radio' defaultChecked={true}>
              And this
            </Radio>
          </div>
          <div className='flex space-x-4'>
            <Radio name='radio-disabled' disabled>
              &hellip; but not this
            </Radio>
            <Radio name='radio-disabled' disabled defaultChecked={true}>
              &hellip; nor this
            </Radio>
          </div>
        </div>
      </Section>
      <Section title='Radio button'>
        <div className='space-y-6 flex flex-col'>
          <Switch />
          <Switch defaultChecked={true} />
          <Switch defaultChecked={true}>With label</Switch>
        </div>
      </Section>
    </>
  )
}

export default Inputs
