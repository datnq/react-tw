import { Menu } from '@headlessui/react'
import React, { Fragment, PropsWithChildren, ReactElement } from 'react'

const DropdownToggle = ({ children }: PropsWithChildren<{}>): ReactElement => {
  return <Menu.Button as={Fragment}>{children}</Menu.Button>
}

export default DropdownToggle
