import { ComponentType, LazyExoticComponent } from 'react';

export interface RouteParams {
  path?: string;
  Component: LazyExoticComponent<ComponentType> | ComponentType;
  index?: boolean;
}
