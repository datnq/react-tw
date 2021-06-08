import React from 'react'
import { Column, Link, Table, TableData } from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'
import useSWR from 'swr'

const Tables = () => {
  const { data: users = [] } = useSWR<TableData>(
    'https://jsonplaceholder.typicode.com/users'
  )
  return (
    <>
      <PageHeader
        title='Table'
        subtitle='Table and table related features'
      />
      <Table data={users} rowKey='id'>
        <Column dataKey='id' header='ID' />
        <Column dataKey='name' header='Name' />
        <Column
          dataKey='email'
          header='Email'
          render={(email) => {
            return <Link href={`mailto:${email}`}>{email}</Link>
          }}
        />
      </Table>
    </>
  )
}

export default Tables
