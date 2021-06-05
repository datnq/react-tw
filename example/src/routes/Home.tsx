import React from 'react'
import { Button, useDialog } from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'

const Home = () => {
  const { confirm } = useDialog()
  return (
    <>
      <PageHeader
        title='Getting Started'
        subtitle='Install and configuration'
      />
      <Button
        onClick={async () => {
          const answer = await confirm('By default, only responsive variants are generated for min-width utilities. You can control which variants are generated for the min-width utilities by modifying the minWidth property in the variants section of your tailwind.config.js file. For example, this config will also generate hover and focus variants:', { variant: 'warning', title: 'Are you sure?' })
          console.log(answer)
        }}
      >Alert</Button>
    </>
  )
}

export default Home
