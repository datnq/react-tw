import { ThemeProps } from '../../types'

const defaultTheme: ThemeProps = {
  button: {
    variant: {
      primary: [
        'border-indigo-500 text-white bg-indigo-500',
        'hover:bg-indigo-600',
        'focus:ring-indigo-500 focus:ring-opacity-30'
      ],
      default: [
        'border-gray-300 text-gray-700 bg-white',
        'hover:bg-gray-50',
        'focus:ring-gray-300 focus:ring-opacity-40'
      ],
      danger: [
        'border-red-500 text-white bg-red-500',
        'hover:bg-red-600',
        'focus:ring-red-500 focus:ring-opacity-30'
      ],
      success: [
        'border-green-600 text-white bg-green-600',
        'hover:bg-green-700',
        'focus:ring-green-600 focus:ring-opacity-30'
      ]
    },
    size: {
      sm: 'px-2 py-1 text-xs rounded-sm',
      md: 'px-4 py-2 text-sm rounded',
      lg: 'px-6 py-3 text-lg rounded-md',
      'narrow-sm': 'p-1 text-xs rounded-sm',
      'narrow-md': 'p-2 text-sm rounded',
      'narrow-lg': 'p-3 text-lg rounded-md'
    }
  }
}

export default defaultTheme
