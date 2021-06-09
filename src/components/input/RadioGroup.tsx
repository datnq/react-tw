import React, { forwardRef, Fragment } from 'react'
import Checkbox from './Checkbox'
import Radio from './Radio'
import { CheckboxGroupProps } from './types'

const RadioGroup = forwardRef<HTMLInputElement, CheckboxGroupProps>(
  ({ options, defaultValue, multiple, ...props }, ref) => {
    const Component = multiple ? Checkbox : Radio
    return (
      <Fragment>
        {options.map((option) => (
          <Component
            key={option.key}
            defaultChecked={defaultValue === option.value}
            placeholder={option.text}
            value={option.value}
            {...props}
            ref={ref}
          />
        ))}
      </Fragment>
    )
  }
)

export default RadioGroup
