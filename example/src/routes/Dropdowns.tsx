import React, { ReactElement, useEffect, useState } from 'react'
import { DotsHorizontalOutline } from '@graywolfai/react-heroicons'
import Flag from 'react-world-flags'
import {
  Dropdown,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItemProps,
  DropdownItemRenderProps
} from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import clsx from 'clsx'
import Syntax from '../components/Syntax'

const items: DropdownItemProps[] = [
  {
    key: 'vi-VN',
    value: 'vi-VN',
    label: 'Tiếng Việt'
  },
  {
    key: 'en-US',
    value: 'en-US',
    label: 'English (United States)'
  }
]

const customRenderItems: DropdownItemProps[] = [
  {
    key: 'VN',
    code: 'VN',
    name: 'Vietnam'
  },
  {
    key: 'US',
    code: 'US',
    name: 'The United States'
  }
]

const Drowndowns = () => {
  const [itemClicked, setItemClicked] = useState<unknown>()
  const [itemClicked2, setItemClicked2] = useState<unknown>()

  useEffect(() => {
    if (itemClicked) {
      console.log(itemClicked)
    }
  }, [itemClicked])

  useEffect(() => {
    if (itemClicked2) {
      console.log(itemClicked2)
    }
  }, [itemClicked2])

  const renderItem = ({
    active,
    item,
    onItemClick
  }: DropdownItemRenderProps): ReactElement => {
    const { code, name } = item
    return (
      <button
        className={clsx(
          'p-2 text-sm w-full text-left focus:outline-none text-gray-800',
          'flex space-x-2 items-center',
          {
            'bg-gray-100 text-gray-900': active
          }
        )}
        onClick={() => {
          onItemClick && onItemClick(item.code, active, item)
        }}
      >
        <Flag code={code} className='w-6 h-4' />
        <span>{name}</span>
      </button>
    )
  }

  return (
    <>
      <PageHeader title='Dropdown' subtitle='Dropdown Menu' />
      <Section title='With items list'>
        <div className='space-x-4'>
          <Dropdown items={items} onItemClick={setItemClicked}>
            <DropdownToggle>
              <Button narrow>
                <DotsHorizontalOutline className='w-5 h-5' />
              </Button>
            </DropdownToggle>
          </Dropdown>
          {itemClicked ? (
            <span className='text-sm'>
              Selected language: <code>{JSON.stringify(itemClicked)}</code>
            </span>
          ) : (
            <span className='text-sm'>Please choose your language</span>
          )}
        </div>
        <Syntax className='mt-8'>{`import { Dropdown, Button, DropdownToggle, DropdownMenu } from '@datnq/react-tw'

const items = [
  { key: 'vi-VN', value: 'vi-VN', label: 'Tiếng Việt' },
  { key: 'en-US', value: 'en-US', label: 'English (United States)' }
]

<Dropdown items={items} onItemClick={handleItemClick}>
  <DropdownToggle>
    <Button narrow>
      <DotsHorizontalOutline className='w-5 h-5' />
    </Button>
  </DropdownToggle>
</Dropdown>`}</Syntax>
      </Section>
      <Section title='With items list (custom item render)'>
        <div className='flex flex-wrap gap-4'>
          <Dropdown
            items={customRenderItems}
            onItemClick={setItemClicked2}
            renderItem={renderItem}
          >
            <DropdownToggle>
              <Button>Where do you come from?</Button>
            </DropdownToggle>
          </Dropdown>
          {itemClicked2 ? (
            <span className='text-sm'>
              Selected nationality: <code>{JSON.stringify(itemClicked2)}</code>
            </span>
          ) : (
            <span className='text-sm'>Please choose your nationality</span>
          )}
        </div>
        <Syntax className='mt-8'>{`import { Dropdown, Button, DropdownToggle, DropdownMenu } from '@datnq/react-tw'

const items = [
  { key: 'VN', code: 'VN', name: 'Vietnam' },
  { key: 'US', code: 'US', name: 'The United States' }
]

const renderItem = ({ active, item, onItemClick }) => {
  const { code, name } = item
  return (
    <button
      className={clsx(
        'p-2 text-sm w-full text-left focus:outline-none text-gray-800',
        'flex space-x-2 items-center',
        {
          'bg-gray-100 text-gray-900': active
        }
      )}
      onClick={() => { onItemClick && onItemClick(item.code, active, item) }}
    >
      <Flag code={code} className='w-6 h-4' />
      <span>{name}</span>
    </button>
  )
}

<Dropdown items={items} onItemClick={handleItemClick} renderItem={renderItem}>
  <DropdownToggle>
    <Button>Where do you come from?</Button>
  </DropdownToggle>
</Dropdown>`}</Syntax>
      </Section>
      <Section title='With custom dropdown menu &amp; positions'>
        <div className='space-x-2'>
          <Dropdown>
            <DropdownToggle>
              <Button variant='primary'>Position Left</Button>
            </DropdownToggle>
            <DropdownMenu>
              <div className='p-4 h-40 text-center items-center flex'>
                <p>Dropdown menu can be any component</p>
              </div>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownToggle>
              <Button variant='primary'>Position Right</Button>
            </DropdownToggle>
            <DropdownMenu position='right'>
              <div className='p-4 h-40 text-center items-center flex'>
                <p>Dropdown menu can be any component</p>
              </div>
            </DropdownMenu>
          </Dropdown>
        </div>
        <Syntax className='mt-8'>{`import { Dropdown, Button, DropdownToggle, DropdownMenu } from '@datnq/react-tw'

<div className='space-x-2'>
  <Dropdown>
    <DropdownToggle>
      <Button variant='primary'>Position Left</Button>
    </DropdownToggle>
    <DropdownMenu>
      <div className='p-4 h-40 text-center items-center flex'>
        <p>Dropdown menu can be any component</p>
      </div>
    </DropdownMenu>
  </Dropdown>
  <Dropdown>
    <DropdownToggle>
      <Button variant='primary'>Position Right</Button>
    </DropdownToggle>
    <DropdownMenu position='right'>
      <div className='p-4 h-40 text-center items-center flex'>
        <p>Dropdown menu can be any component</p>
      </div>
    </DropdownMenu>
  </Dropdown>
</div>`}</Syntax>
      </Section>
    </>
  )
}

export default Drowndowns
