import { ThemeProps } from './types'

export const defaultTheme: ThemeProps = {
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
  },
  input: {
    state: {
      normal: {
        control: [
          'border-gray-300 text-gray-800 bg-white',
          'hover:border-gray-500',
          'focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-30'
        ]
      },
      invalid: {
        control: [
          'border-red-500 text-gray-800 bg-white',
          'hover:border-red-600',
          'focus:border-red-500 focus:ring-red-500 focus:ring-opacity-30'
        ]
      },
      valid: {
        control: [
          'border-green-500 text-gray-800 bg-white',
          'hover:border-green-600',
          'focus:border-green-500 focus:ring-green-500 focus:ring-opacity-30'
        ]
      },
      disabled: {
        control: [
          'border-gray-300 text-gray-500 bg-white bg-gray-200 cursor-default'
        ]
      }
    },
    size: {
      sm: 'px-2 py-1 text-xs rounded-sm',
      md: 'px-4 py-2 text-sm rounded',
      lg: 'px-6 py-3 text-lg rounded-md'
    }
  },
  checkbox: {
    state: {
      normal: {
        control: [
          'border-gray-300 bg-white hover:border-indigo-500',
          'checked:bg-indigo-500 checked:border-indigo-500 checked:ring-indigo-500 checked:ring-opacity-30'
        ],
        indicator: ['border-transparent checked-sibling:border-white']
      },
      disabled: {
        control: [
          'border-gray-300 bg-gray-200',
          'checked:bg-gray-300 checked:border-gray-300 checked:ring-opacity-0 checked:ring-transparent'
        ],
        indicator: ['border-transparent checked-sibling:border-white']
      }
    },
    size: {
      sm: 'h-4 w-4 border-2 rounded',
      md: 'px-4 py-2 text-sm rounded',
      lg: 'px-6 py-3 text-lg rounded-md'
    }
  },
  radio: {
    state: {
      normal: {
        control: [
          'border-gray-300 bg-white hover:border-indigo-500',
          'checked:border-indigo-500'
        ],
        indicator: ['bg-indigo-500']
      },
      disabled: {
        control: [
          'border-gray-300 bg-gray-200',
          'checked:bg-gray-300 checked:border-gray-300 checked:ring-opacity-0 checked:ring-transparent'
        ],
        indicator: ['bg-gray-300']
      }
    },
    size: {
      sm: 'h-4 w-4 border-2 rounded ',
      md: 'px-4 py-2 text-sm rounded',
      lg: 'px-6 py-3 text-lg rounded-md'
    }
  },
  switch: {
    state: {
      normal: {
        control: 'bg-gray-200 checked-sibling:bg-indigo-500',
        indicator: 'bg-white'
      },
      disabled: {
        control: 'bg-gray-200 checked-sibling:bg-gray-400',
        indicator: 'bg-white'
      }
    },
    size: {
      sm: 'h-4 w-4 border-2 rounded ',
      md: 'px-4 py-2 text-sm rounded',
      lg: 'px-6 py-3 text-lg rounded-md'
    }
  }
}
