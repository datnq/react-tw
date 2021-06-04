import Home from './Home'
import { NavItemProps } from '../types'
import Buttons from './Buttons'
import Dropdowns from './Dropdowns'

const routes: { [key: string]: NavItemProps } = {
  home: {
    href: '/',
    label: 'Getting Started',
    exact: true,
    component: Home
  },
  buttons: {
    href: '/buttons',
    label: 'Button',
    component: Buttons
  },
  dropdown: {
    href: '/dropdown',
    label: 'Dropdown',
    component: Dropdowns
  }
}

export default routes
