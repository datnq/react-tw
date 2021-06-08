import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, {
  FC,
  forwardRef,
  Fragment,
  PropsWithChildren,
  ReactElement
} from 'react'
import { Button } from '../button'
import { ListboxOptionsProps, ListItemProps, ListboxToggleProps } from './types'

export const ListToggle: FC<ListboxToggleProps> = ({
  className,
  icon,
  label,
  placeholder,
  size = 'md',
  variant = 'default'
}) => {
  return (
    <Listbox.Button as={Fragment}>
      <Button
        size={size}
        variant={variant}
        className={clsx('!pr-2 w-full', className)}
      >
        <span
          className={clsx('block flex-grow text-left min-w-max', {
            'text-gray-400': !label
          })}
        >
          {label || placeholder || ''}
        </span>
        {icon}
      </Button>
    </Listbox.Button>
  )
}

export const Options = ({
  className,
  children
}: PropsWithChildren<ListboxOptionsProps>): ReactElement => {
  return (
    <Transition
      as={Fragment}
      enter='transition ease-out duration-100'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition ease-in duration-100'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
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
