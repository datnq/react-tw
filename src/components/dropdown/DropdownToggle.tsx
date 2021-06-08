import { Menu } from '@headlessui/react'
import React, { FC, Fragment } from 'react'

const DropdownToggle: FC<{}> = ({ children }) => {
  return <Menu.Button as={Fragment}>{children}</Menu.Button>
}

export default DropdownToggle
