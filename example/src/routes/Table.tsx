import React, { useState } from 'react'
import {
  Column,
  Link,
  SelectionColumn,
  SortableColumn,
  Table,
  TableData
} from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'
import useSWR from 'swr'
import Section from '../components/Section'

interface SampleTableState {
  selected?: string[]
  [x: string]: any
}

const Tables = () => {
  const { data: users = [] } = useSWR<TableData>(
    'https://jsonplaceholder.typicode.com/users'
  )
  const [state, setState] = useState<SampleTableState | undefined>()

  const changeSate = (newState: SampleTableState) => {
    setState(newState)
  }

  return (
    <>
      <PageHeader title='Table' subtitle='Table and table related features' />
      <Section title='Basic table'>
        <Table data={users} rowKey='id' state={state} setState={changeSate}>
          <SelectionColumn dataKey='id' />
          <Column dataKey='id' header='ID' />
          <SortableColumn dataKey='name' header='Name' />
          <Column
            dataKey='email'
            header='Email'
            render={(email) => <Link href={`mailto:${email}`}>{email}</Link>}
          />
        </Table>
      </Section>
    </>
  )
}

export default Tables
