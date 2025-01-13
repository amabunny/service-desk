import { createEvent } from 'effector';
import { NavigateFunction } from 'react-router';

interface AppInitParams {
  navigate?: NavigateFunction;
}

export const initializeApp = createEvent<AppInitParams>();
