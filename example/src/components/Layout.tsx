import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import routes from '../routes'
import Nav from './Nav'
import { ReactComponent as Logo } from '../assets/logo.svg'

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className='min-h-screen grid grid-flow-col grid-cols-layout grid-rows-layout'>
      <header className='border-r row-span-2'>
        <Link to='/' className='flex p-4 h-16 items-center'>
          <Logo className='w-full' />
        </Link>
        <Nav routes={routes} className='my-8' />
      </header>
      <main className='p-8'>{children}</main>
      <footer className='flex flex-row text-gray-500 text-sm items-center p-4'>
        <span>
          &copy; 2021{' '}
          <a
            className='text-blue-500 hover:text-blue-600'
            href='https://github.com/datnq'
          >
            Joey Nguyen
          </a>
          . MIT licensce.
        </span>
      </footer>
    </div>
  )
}
export default Layout
