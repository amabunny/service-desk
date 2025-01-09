import { ComponentType, LazyExoticComponent } from 'react';

export interface RouteParams {
  path?: '';
  Component: LazyExoticComponent<ComponentType> | ComponentType;
  index?: boolean;
}
