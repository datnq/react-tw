import React, { useState } from 'react'
import { Select, SelectOptionsProps, Datepicker } from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'

const options: SelectOptionsProps[] = [
  {
    key: 'vi-VN',
    value: 'vi-VN',
    text: 'Tiếng Việt'
  },
  {
    key: 'en-US',
    value: 'en-US',
    text: 'English (United States)'
  }
]

const Selectors = () => {
  const [select, setSelect] = useState('vi-VN')
  const [selectDate, setSelectDate] = useState()
  return (
    <>
      <PageHeader title='Selector' subtitle='Select, Datepicker...' />
      <Section title='Select'>
        <div className='space-x-2'>
          <Select
            options={options}
            value={select}
            onChange={setSelect}
            className='w-1/3'
          />
        </div>
      </Section>
      <Section title='Datepicker'>
        <div className='space-x-2'>
          <Datepicker
            onChange={setSelectDate}
            placeholder='Pick a date'
            value={selectDate}
            className='w-1/3'
            format={{
              weekday: 'short',
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }}
          />
        </div>
      </Section>
    </>
  )
}

export default Selectors
