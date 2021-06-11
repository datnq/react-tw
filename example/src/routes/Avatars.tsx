import React from 'react'
import { UserOutline } from '@graywolfai/react-heroicons'
import { Avatar } from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import Syntax from '../components/Syntax'

const Avatars = () => {
  return (
    <>
      <PageHeader title='Avatar' subtitle='Avatar and avatar stack' />
      <Section title='Avatar'>
        <div className='gap-4 flex'>
          <Avatar>
            <UserOutline className='w-6 h-6' />
          </Avatar>
          <Avatar picture='https://randomuser.me/api/portraits/lego/1.jpg' />
          <Avatar name='Joey Nguyen' />
        </div>
        <Syntax className='mt-8'>
          {`import { Avatar } from '@datnq/react-tw'

<div className='gap-4 flex'>
  <Avatar>
    <UserOutline className='w-6 h-6' />
  </Avatar>
  <Avatar picture='https://randomuser.me/api/portraits/lego/1.jpg' />
  <Avatar name='Joey Nguyen' />
</div>`}
        </Syntax>
      </Section>
      <Section title='Avatar group'>
        <div className='-space-x-6'>
          <Avatar picture='https://randomuser.me/api/portraits/women/57.jpg' />
          <Avatar picture='https://randomuser.me/api/portraits/women/66.jpg' />
          <Avatar picture='https://randomuser.me/api/portraits/women/12.jpg' />
          <Avatar name='Joey Nguyen' />
          <Avatar picture='https://randomuser.me/api/portraits/women/17.jpg' />
        </div>
        <Syntax className='mt-8'>
          {`import { Avatar } from '@datnq/react-tw'

<div className='-space-x-6 flex'>
  <Avatar picture='https://randomuser.me/api/portraits/women/57.jpg' />
  <Avatar picture='https://randomuser.me/api/portraits/women/66.jpg' />
  <Avatar picture='https://randomuser.me/api/portraits/women/12.jpg' />
  <Avatar name='Joey Nguyen' />
  <Avatar picture='https://randomuser.me/api/portraits/women/17.jpg' />
</div>`}
        </Syntax>
      </Section>
    </>
  )
}

export default Avatars
