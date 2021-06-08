import { Menu } from '@headlessui/react'
import clsx from 'clsx'
import React, { FC, ReactElement } from 'react'
import { DropdownItemProps, DropdownProps } from './types'
import DropdownToggle from './DropdownToggle'
import DropdownMenu from './DropdownMenu'

const Dropdown: FC<DropdownProps> = ({
  className,
  children,
  items,
  renderItem,
  onItemClick
}) => {
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
          <div className='p-1 space-y-1'>
            {items.map((item) => (
              <Menu.Item key={item.key}>
                {({ active }): ReactElement =>
                  renderItem ? (
                    renderItem({ active, item, onItemClick })
                  ) : (
                    <button
                      className={clsx(
                        'py-2 px-4 text-sm w-full text-left focus:outline-none text-gray-800 rounded-sm',
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

export { DropdownToggle, DropdownMenu }

export default Dropdown
