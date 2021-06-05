import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  Fragment,
  PropsWithChildren,
  ReactElement
} from 'react'

interface ListboxOptionsProps {
  className?: string
}

export const Options = ({
  className,
  children
}: PropsWithChildren<ListboxOptionsProps>): ReactElement => {
  return (
    <Transition
      as={Fragment}
      enter='transition ease-out duration-100'
      enterFrom='transform opacity-0'
      enterTo='transform opacity-100'
      leave='transition ease-in duration-75'
      leaveFrom='transform opacity-100'
      leaveTo='transform opacity-0'
    >
      <Listbox.Options
        className={clsx(
          'absolute w-56 mt-1 origin-top-right z-10',
          'bg-white rounded shadow-md ring-1 ring-black ring-opacity-5',
          'focus:outline-none left-0 top-full',
          className
        )}
      >
        {children}
      </Listbox.Options>
    </Transition>
  )
}

interface ListItemProps extends ComponentPropsWithoutRef<'div'> {
  selected?: boolean
}

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  ({ children, selected, className }, ref) => {
    return (
      <div
        className={clsx(
          'py-2 px-3 cursor-pointer hover:bg-gray-200 focus:outline-none text-sm rounded-sm',
          {
            'bg-gray-100 text-gray-900': selected
          },
          className
        )}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)
