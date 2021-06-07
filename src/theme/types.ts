/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ThemeProps {
  button: {
    variant: DefaultButtonVariants & { [x: string]: ClassNames }
    size: DefaultButtonSizes & { [x: string]: ClassNames }
  }
  input: {
    state: DefaultInputStates & { [x: string]: ControlElement }
    size: DefaultControlSizes & { [x: string]: ClassNames }
  }
  checkbox: {
    state: DefaultCheckboxStates & { [x: string]: ControlElement }
    size: DefaultControlSizes & { [x: string]: ClassNames }
  }
  radio: {
    state: DefaultCheckboxStates & { [x: string]: ControlElement }
    size: DefaultControlSizes & { [x: string]: ClassNames }
  }
  switch: {
    state: DefaultCheckboxStates & { [x: string]: ControlElement }
    size: DefaultControlSizes & { [x: string]: ClassNames }
  }
}

export type ClassNames = string | string[] | { [x: string]: boolean }

export interface ControlElement {
  control: ClassNames
  indicator?: ClassNames
}

export interface DefaultControlState {
  normal: ControlElement
  disabled: ControlElement
  valid?: ControlElement
  invalid?: ControlElement
}

export interface DefaultCheckboxStates extends DefaultControlState {}

export interface DefaultInputStates extends DefaultControlState {}

export interface DefaultControlSizes {
  sm: ClassNames
  md: ClassNames
  lg: ClassNames
}

export interface DefaultButtonVariants {
  default: ClassNames
  primary: ClassNames
  danger: ClassNames
  success: ClassNames
}

export interface DefaultButtonSizes extends DefaultControlSizes {
  'narrow-sm': ClassNames
  'narrow-md': ClassNames
  'narrow-lg': ClassNames
}
