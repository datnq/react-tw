import { ReactElement } from 'react'

export interface DropdownMenuProps {
  className?: string
  position?: 'left' | 'right'
}

export interface DropdownItemRenderProps {
  active: boolean
  item: DropdownItemProps
  onItemClick?: (
    value: unknown,
    active: boolean,
    item: DropdownItemProps
  ) => unknown
}

export interface DropdownItemProps {
  key: string
  value?: unknown
  label?: ReactElement<unknown> | string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}

export interface DropdownProps {
  className?: string
  items?: DropdownItemProps[]
  renderItem?: (props: DropdownItemRenderProps) => ReactElement
  onItemClick?: (
    value: unknown,
    active: boolean,
    item: DropdownItemProps
  ) => unknown
}
