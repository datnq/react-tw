import React, { Fragment, ReactElement } from 'react'
import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { Button } from '../button'
import { ListItem, Options } from './Listbox'
import { ChevronDownIcon } from '../icons'
import { useTheme } from '../theme-provider'
import { SelectProps } from './types'

const Select = ({
  value,
  onChange,
  options,
  className,
  placeholder = 'Please select...',
  state = 'normal',
  inputSize = 'md',
  disabled
}: SelectProps): ReactElement => {
  const selectedOption = options.find((o) => o.value === value)

  const theme = useTheme()
  const sizeStyles = theme?.input.size[inputSize]
  const stateStyles = theme?.input.state[state]
  const disabledStyles = theme?.input.state.disabled

  return (
    <Listbox
      as='div'
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={clsx('relative inline-flex align-middle', className)}
    >
      <Listbox.Button as={Fragment}>
        <Button
          className={clsx(
            '!pr-2 w-full text-left',
            sizeStyles,
            stateStyles,
            disabled ? disabledStyles : ''
          )}
        >
          <span
            className={clsx('block flex-grow', {
              'text-gray-400': !value
            })}
          >
            {selectedOption ? selectedOption.text : placeholder}
          </span>
          <ChevronDownIcon className='w-4 h-4' />
        </Button>
      </Listbox.Button>
      <Options className='min-w-min w-full'>
        <div className='p-1 space-y-1'>
          {options.map((option) => (
            <Listbox.Option key={option.key} value={option.value}>
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
