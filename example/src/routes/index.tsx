import Home from './Home'
import { NavItemProps } from '../types'
import Buttons from './Buttons'
import Dropdowns from './Dropdowns'
import Inputs from './Inputs'
import Avatars from './Avatars'
import Selectors from './Selectors'
import Modals from './Modals'
import Toasters from './Toasters'
import Tables from './Table'
import Slideout from './Slideout'

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
  },
  table: {
    href: '/table',
    label: 'Table',
    component: Tables
  },
  modals: {
    href: '/modals',
    label: 'Modal',
    component: Modals
  },
  slideout: {
    href: '/slideout',
    label: 'Slideout',
    component: Slideout
  },
  toasters: {
    href: '/toasts',
    label: 'Toaster',
    component: Toasters
  }
}

export default routes
