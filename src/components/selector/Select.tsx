import React, { FC, ReactElement } from 'react'
import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { ListItem, ListToggle, Options } from './Listbox'
import { ChevronDownIcon } from '../icons'
import { SelectProps } from './types'

const Select: FC<SelectProps> = ({
  value,
  onChange,
  options,
  className,
  containerClassName,
  placeholder = 'Please select...',
  size = 'md',
  variant = 'default',
  narrow,
  disabled
}) => {
  const selectedOption = options.find((o) => o.value === value)

  const change = (value: string | undefined): void => {
    onChange && onChange(value)
  }

  return (
    <Listbox
      as='div'
      value={value}
      onChange={change}
      disabled={disabled}
      className={clsx('relative inline-flex align-middle', containerClassName)}
    >
      <ListToggle
        size={size}
        variant={variant}
        narrow={narrow}
        icon={<ChevronDownIcon className='w-4 h-4' />}
        label={selectedOption ? selectedOption.text : ''}
        placeholder={placeholder}
        className={className}
      />
      <Options className='min-w-min w-full'>
        <div className='p-1 space-y-1'>
          {options.map((option) => (
            <Listbox.Option as='div' key={option.key} value={option.value}>
              {({ selected }): ReactElement => (
                <ListItem selected={selected}>{option.text}</ListItem>
              )}
            </Listbox.Option>
          ))}
        </div>
      </Options>
    </Listbox>
  )
}

export default Select
