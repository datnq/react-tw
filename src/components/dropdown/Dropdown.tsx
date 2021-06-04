import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { Fragment, PropsWithChildren, ReactElement } from 'react'
import {
  DropdownItemProps,
  DropdownMenuProps,
  DropdownProps
} from '../../types'

const DropdownToggle = ({ children }: PropsWithChildren<{}>): ReactElement => {
  return <Menu.Button as={Fragment}>{children}</Menu.Button>
}

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

const Dropdown = ({
  className,
  children,
  items,
  renderItem,
  onItemClick
}: PropsWithChildren<DropdownProps>): ReactElement => {
  const itemClick = (
    value: unknown,
    active: boolean,
    item: DropdownItemProps
  ): void => {
    onItemClick && onItemClick(value, active, item)
  }
  return (
    <Menu
      as='div'
      className={clsx('relative inline-block text-left', className)}
    >
      {children}
      {items && (
        <DropdownMenu>
          <div className='px-1 py-1 space-y-1'>
            {items.map((item) => (
              <Menu.Item key={item.key}>
                {({ active }): ReactElement =>
                  renderItem ? (
                    renderItem({ active, item, onItemClick })
                  ) : (
                    <button
                      className={clsx(
                        'py-2 px-4 text-sm w-full text-left focus:outline-none text-gray-800',
                        {
                          'bg-gray-100 text-gray-900': active
                        }
                      )}
                      type='button'
                      onClick={(): void => {
                        itemClick(item.value, active, item)
                      }}
                    >
                      {item.label}
                    </button>
                  )
                }
              </Menu.Item>
            ))}
          </div>
        </DropdownMenu>
      )}
    </Menu>
  )
}

Dropdown.Toggle = DropdownToggle
Dropdown.Menu = DropdownMenu

export { DropdownToggle, DropdownMenu }

export default Dropdown
