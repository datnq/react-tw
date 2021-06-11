import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { NavProps } from '../types'

const Nav: FC<NavProps> = ({ routes, className }) => {
  return (
    <nav className={className}>
      {Object.keys(routes).map((key) => {
        const route = routes[key]
        return (
          <NavLink
            key={key}
            to={route.href}
            exact={route.exact}
            className='block px-6 py-2 text-sm hover:bg-gray-100 text-gray-600'
            activeClassName='md:border-r-4 border-l-0 border-indigo-500 font-bold md:text-gray-800 text-indigo-600'
          >
            {route.label}
          </NavLink>
        )
      })}
    </nav>
  )
}

export default Nav
