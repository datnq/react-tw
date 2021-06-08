import clsx from 'clsx'
import React, { FC } from 'react'
import { getInitials } from '../../utils'

export interface AvatarProps {
  picture?: string
  name?: string
  className?: ''
}

const Avatar: FC<AvatarProps> = ({ picture, name, className, children }) => {
  return (
    <span
      className={clsx(
        'inline-flex rounded-full w-10 h-10 bg-gray-400 justify-center items-center text-white align-middle overflow-hidden',
        'ring-2 ring-white',
        className
      )}
    >
      {picture ? (
        <img src={picture} alt={name || picture} />
      ) : name ? (
        <span>{getInitials(name)}</span>
      ) : (
        children
      )}
    </span>
  )
}

export default Avatar
