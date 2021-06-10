import React, { MutableRefObject, useState } from 'react'
import {
  Select,
  SelectOptionsProps,
  Datepicker,
  FilePicker,
  FilePickerRenderProps,
  getDataUrl,
  Input
} from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { UploadOutline } from '@graywolfai/react-heroicons'
import clsx from 'clsx'
import { get } from 'lodash'
import Syntax from '../components/Syntax'

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
  const [select, setSelect] = useState<string | undefined>('vi-VN')
  const [selectDate, setSelectDate] = useState<Date>()
  const [dataUrl, setDataUrl] = useState<string>()

  const setFileAsDataUrl = async (file: File) => {
    const data = await getDataUrl(file)
    setDataUrl(String(data))
  }
  return (
    <>
      <PageHeader title='Selector' subtitle='Select, Datepicker...' />
      <Section title='Select'>
        <div className='space-x-2'>
          <Select
            options={options}
            value={select}
            onChange={setSelect}
            containerClassName='w-full max-w-xs'
          />
        </div>
        <Syntax className='mt-8'>{`import { Select } from '@datnq/react-tw'

const options = [
  { key: 'vi-VN', value: 'vi-VN', text: 'Tiếng Việt' },
  { key: 'en-US', value: 'en-US', text: 'English (United States)' }
]

const [select, setSelect] = useState('vi-VN')

<div className='space-x-2'>
  <Select
    options={options}
    value={select}
    onChange={setSelect}
    containerClassName='w-full max-w-xs'
  />
</div>`}</Syntax>
      </Section>
      <Section title='Datepicker'>
        <div className='space-x-2'>
          <Datepicker
            onChange={setSelectDate}
            placeholder='Pick a date'
            value={selectDate}
            containerClassName='w-full max-w-xs'
            format={{
              weekday: 'short',
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }}
          />
        </div>
        <Syntax className='mt-8'>{`import { Datepicker } from '@datnq/react-tw'

const [selectDate, setSelectDate] = useState()

<div className='space-x-2'>
  <Datepicker
    onChange={setSelectDate}
    placeholder='Pick a date'
    value={selectDate}
    containerClassName='w-full max-w-xs'
    format={{
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }}
  />
</div>`}</Syntax>
      </Section>
      <Section title='FilePicker'>
        <FilePicker>
          {({ files, handlers }: FilePickerRenderProps) => {
            return (
              <div className='relative w-80 cursor-pointer' onClick={handlers.add}>
                <Input
                  readOnly
                  value={get(files, '[0].name')}
                  className='pr-20 cursor-pointer'
                  containerClassName='w-full'
                />
                <button className='absolute inset-y-0 right-0 text-sm px-4 focus:outline-none border-l border-l-gray-400'>
                  Browse&hellip;
                </button>
              </div>
            )
          }}
        </FilePicker>
        <Syntax className='mt-8'>{`import { FilePicker } from '@datnq/react-tw'

<FilePicker>
  {({ files, handlers }) => {
    return (
      <div className='relative w-80 cursor-pointer' onClick={handlers.add}>
        <Input
          readOnly
          value={get(files, '[0].name')}
          className='pr-20 cursor-pointer'
          containerClassName='w-full'
        />
        <button className='absolute inset-y-0 right-0 text-sm px-4 focus:outline-none border-l border-l-gray-400'>
          Browse&hellip;
        </button>
      </div>
    )
  }}
</FilePicker>`}</Syntax>
      </Section>
      <Section title='FilePicker (droppable)'>
        <FilePicker accept='image/*'>
          {({
            files,
            handlers,
            dragging,
            dragDropRef
          }: FilePickerRenderProps) => {
            console.log(files)
            files.length && setFileAsDataUrl(files[0])
            return dataUrl ? (
              <img
                src={String(dataUrl)}
                className={clsx(
                  'w-60 h-60 object-contain object-center cursor-pointer bg-gray-100 rounded-md',
                  'hover:bg-gray-100 hover:shadow-md'
                )}
                alt='Just uploaded'
                onClick={() => handlers.replace()}
              />
            ) : (
              <div
                onClick={handlers.add}
                draggable
                ref={dragDropRef as MutableRefObject<HTMLDivElement>}
                className={clsx(
                  'w-full h-80 border-2 border-dashed border-gray-300 cursor-pointer',
                  'hover:bg-gray-50 hover:border-gray-400 transition',
                  'flex flex-col items-center justify-center space-y-4 text-gray-400',
                  {
                    'bg-indigo-50 border-indigo-400': dragging
                  }
                )}
              >
                <UploadOutline className='w-10 h-10' />
                <span className='text-sm'>Add file</span>
              </div>
            )
          }}
        </FilePicker>
        <Syntax className='mt-8'>{`import { FilePicker, getDataUrl } from '@datnq/react-tw'

const [dataUrl, setDataUrl] = useState()

const setFileAsDataUrl = async (file: File) => {
  const data = await getDataUrl(file)
  setDataUrl(String(data))
}

<FilePicker accept='image/*'>
  {({ files, handlers, dragging, dragDropRef }) => {
    files.length && setFileAsDataUrl(files[0])
    return dataUrl ? (
      <img
        src={String(dataUrl)}
        className={clsx(
          'w-60 h-60 object-contain object-center cursor-pointer bg-gray-100 rounded-md',
          'hover:bg-gray-100 hover:shadow-md'
        )}
        alt='Just uploaded'
        onClick={() => handlers.replace()}
      />
    ) : (
      <div
        onClick={handlers.add}
        ref={dragDropRef}
        className={clsx(
          'w-full h-80 border-2 border-dashed border-gray-300 cursor-pointer',
          'hover:bg-gray-50 hover:border-gray-400 transition',
          'flex flex-col items-center justify-center space-y-4 text-gray-400',
          {
            'bg-indigo-50 border-indigo-400': dragging
          }
        )}
      >
        <UploadOutline className='w-10 h-10' />
        <span className='text-sm'>Add file</span>
      </div>
    )
  }}
</FilePicker>`}</Syntax>
      </Section>
    </>
  )
}

export default Selectors
