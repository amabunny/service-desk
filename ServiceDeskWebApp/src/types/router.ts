import { ComponentType, LazyExoticComponent } from 'react';

export interface RouteParams {
  path?: string;
  Component: LazyExoticComponent<ComponentType> | ComponentType;
  index?: boolean;
}

export interface MenuItem {
  title: string;
  path: string;
}
