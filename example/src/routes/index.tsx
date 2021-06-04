import Home from './Home'
import { NavItemProps } from '../types'
import Buttons from './Buttons'
import Dropdowns from './Dropdowns'
import Inputs from './Inputs'

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
  inputs: {
    href: '/controls',
    label: 'Input',
    component: Inputs
  },
  dropdown: {
    href: '/dropdown',
    label: 'Dropdown',
    component: Dropdowns
  }
}

export default routes
