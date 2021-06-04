import React, { ReactElement, useEffect, useState } from 'react'
import { DotsHorizontalOutline } from '@graywolfai/react-heroicons'
import Flag from 'react-world-flags'
import { Dropdown, Button } from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import {
  DropdownItemProps,
  DropdownItemRenderProps
} from '@datnq/react-tw/dist/types'
import clsx from 'clsx'

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
            <Dropdown.Toggle>
              <Button narrow>
                <DotsHorizontalOutline className='w-5 h-5' />
              </Button>
            </Dropdown.Toggle>
          </Dropdown>
          {itemClicked ? (
            <span className='text-sm'>
              Selected language: <code>{JSON.stringify(itemClicked)}</code>
            </span>
          ) : (
            <span className='text-sm'>Please choose your language</span>
          )}
        </div>
      </Section>
      <Section title='With items list (custom item render)'>
        <div className='space-x-4'>
          <Dropdown
            items={customRenderItems}
            onItemClick={setItemClicked2}
            renderItem={renderItem}
          >
            <Dropdown.Toggle>
              <Button>Where do you come from?</Button>
            </Dropdown.Toggle>
          </Dropdown>
          {itemClicked2 ? (
            <span className='text-sm'>
              Selected nationality: <code>{JSON.stringify(itemClicked2)}</code>
            </span>
          ) : (
            <span className='text-sm'>Please choose your nationality</span>
          )}
        </div>
      </Section>
      <Section title='With custom dropdown menu &amp; positions'>
        <div className='space-x-2'>
          <Dropdown>
            <Dropdown.Toggle>
              <Button variant='primary'>Position Left</Button>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <div className='p-4 h-40 text-center items-center flex'>
                <p>Dropdown menu can be any component</p>
              </div>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>
              <Button variant='primary'>Position Right</Button>
            </Dropdown.Toggle>
            <Dropdown.Menu position='right'>
              <div className='p-4 h-40 text-center items-center flex'>
                <p>Dropdown menu can be any component</p>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Section>
    </>
  )
}

export default Drowndowns
