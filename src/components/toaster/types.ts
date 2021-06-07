import {
  DefaultToastOptions,
  Renderable,
  Toast,
  ToastPosition
} from 'react-hot-toast/dist/core/types'

export interface ToasterProps {
  position?: ToastPosition
  toastOptions?: DefaultToastOptions
  reverseOrder?: boolean
  gutter?: number
  containerStyle?: React.CSSProperties
  containerClassName?: string
  children?: (toast: Toast) => JSX.Element
}

export interface ToastBarProps {
  toast: Toast
  position?: ToastPosition
  style?: React.CSSProperties
  children?: (components: {
    icon: Renderable
    message: Renderable
  }) => Renderable
}

export interface ToastIconProps {
  toast: Toast
  className?: string
}
