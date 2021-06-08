import React, { FC, ReactElement, useMemo } from 'react'
import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { useCalendar, shortDayNames } from '../../hooks'
import { ListItem, ListToggle, Options } from './Listbox'
import { Button } from '../button'
import { splitToRows } from '../../utils'
import { DatepickerProps } from './types'
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '../icons'
import { dateFormats, formatDate } from './consts'

const Datepicker: FC<DatepickerProps> = ({
  value,
  placeholder,
  onChange,
  disabled,
  locale = 'en-US',
  format = dateFormats.short,
  size = 'md',
  variant = 'default',
  narrow,
  className,
  containerClassName
}) => {
  const calendar = useCalendar(value || new Date())
  const weeks = useMemo(() => splitToRows(calendar.items, 7), [calendar])

  const change = (value: Date | undefined): void => {
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
        icon={<CalendarIcon className='w-4 h-4' />}
        label={value ? formatDate(value, locale, format) : ''}
        placeholder={placeholder}
        className={className}
      />
      <Options className='p-2 min-w-min'>
        <table className='border-collapse'>
          <thead>
            <tr>
              <td colSpan={7} className='p-2'>
                <div className='flex items-center space-x-2'>
                  <strong className='flex-grow'>
                    {calendar.month.name} &ndash; {calendar.year}
                  </strong>
                  <Button narrow onClick={calendar.prevMonth} size='sm'>
                    <ChevronLeftIcon className='w-4 h-4' />
                  </Button>
                  <Button narrow onClick={calendar.nextMonth} size='sm'>
                    <ChevronRightIcon className='w-4 h-4' />
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              {shortDayNames.map((day) => (
                <th key={day} className='text-center py-1 px-2 text-sm'>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, index) => (
              <tr key={index}>
                {week.map(({ fullDate, name, isSameMonth, isToday, date }) => {
                  const isSelected =
                    value && fullDate.toDateString() === value.toDateString()
                  return (
                    <Listbox.Option value={fullDate} as='td' key={name}>
                      {({ selected }): ReactElement => (
                        <ListItem
                          selected={selected}
                          className={clsx(
                            'w-8 h-8 p-0 rounded text-right flex items-center justify-center mx-auto',
                            {
                              'font-bold text-indigo-500':
                                isToday && !isSelected,
                              'text-gray-400': !isSameMonth,
                              '!text-white bg-indigo-500': isSelected
                            }
                          )}
                        >
                          {date}
                        </ListItem>
                      )}
                    </Listbox.Option>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </Options>
    </Listbox>
  )
}

export default Datepicker
