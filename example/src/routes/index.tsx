import Home from './Home'
import { NavItemProps } from '../types'
import Buttons from './Buttons'

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
  }
}

export default routes
