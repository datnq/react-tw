import Home from './Home'
import { NavItemProps } from '../types'
import Buttons from './Buttons'
import Dropdowns from './Dropdowns'
import Inputs from './Inputs'
import Avatars from './Avatars'
import Selectors from './Selectors'

const routes: { [key: string]: NavItemProps } = {
  home: {
    href: '/',
    label: 'Getting Started',
    exact: true,
    component: Home
  },
  avatars: {
    href: '/avatar',
    label: 'Avatar',
    component: Avatars
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
  selectors: {
    href: '/selectors',
    label: 'Selector',
    component: Selectors
  },
  dropdown: {
    href: '/dropdown',
    label: 'Dropdown',
    component: Dropdowns
  }
}

export default routes
