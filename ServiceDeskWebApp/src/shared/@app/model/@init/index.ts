import { createDomain } from 'effector';
import { NavigateFunction } from 'react-router';

interface AppInitParams {
  navigate?: NavigateFunction;
}

export const appDomain = createDomain();

export const initializeApp = appDomain.createEvent<AppInitParams>();
