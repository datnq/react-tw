import { ReactElement } from 'react';
import { RouteComponentProps } from 'react-router';

export interface NavItemProps {
  href: string
  label: string | ReactElement
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  exact?: boolean;
}

export interface NavProps {
  className: string,
  routes: { [key: string]: NavItemProps }
}
