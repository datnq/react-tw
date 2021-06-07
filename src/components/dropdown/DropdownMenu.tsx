import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { Fragment, PropsWithChildren, ReactElement } from 'react'
import { DropdownMenuProps } from './types'

const DropdownMenu = ({
  className,
  children,
  position = 'left'
}: PropsWithChildren<DropdownMenuProps>): ReactElement => {
  return (
    <Transition
      as={Fragment}
      enter='transition ease-out duration-100'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-75'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'
    >
      <Menu.Items
        className={clsx(
          'absolute w-56 mt-1 origin-top-right z-10',
          'bg-white rounded shadow-md ring-1 ring-black ring-opacity-5',
          'focus:outline-none',
          position === 'right' ? 'right-0' : 'left-0',
          className
        )}
      >
        {children}
      </Menu.Items>
    </Transition>
  )
}

export default DropdownMenu
