import React, { useState, PropsWithChildren, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import clsx from 'clsx'
import { useScreen, SlideOut, Button } from '@datnq/react-tw'
import { ArrowRightOutline, MenuAlt2Outline } from '@graywolfai/react-heroicons'
import routes from '../routes'
import Nav from './Nav'
import { ReactComponent as Logo } from '../assets/logo.svg'

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const screen = useScreen()
  const [open, setOpen] = useState(false)

  const history = useHistory()
  useEffect(() => {
    const unlisten = history.listen(() => {
      if (open) setOpen(false)
    })
    return () => {
      unlisten()
    }
  }, [history, open])

  return (
    <div
      className={clsx(
        'min-h-screen',
        'flex flex-col',
        'md:grid grid-flow-col grid-cols-layout grid-rows-layout'
      )}
    >
      <header className='border-r row-span-2 top-0 bg-white flex md:block items-center'>
        <Link to='/' className='flex p-4 h-16 flex-grow items-center order-2'>
          <Logo className='md:w-full w-48' />
        </Link>
        {screen.isComputer() ? (
          <Nav routes={routes} className='my-8' />
        ) : (
          <div className='p-4 order-1'>
            <Button narrow onClick={() => setOpen(true)} className='!border-0 shadow-none'>
              <MenuAlt2Outline className='w-5 h-5' />
            </Button>
            <SlideOut
              onClose={() => setOpen(false)}
              open={open}
              closeIcon={<ArrowRightOutline className='w-6 h-6' />}
              position='left'
              size='sm'
            >
              <Nav routes={routes} />
            </SlideOut>
          </div>
        )}
      </header>
      <main className='p-8 max-w-2xl'>{children}</main>
      <footer className='flex flex-row text-gray-500 text-sm items-center p-4 border-t border-gray-300'>
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
