import { createStore } from 'effector';
import { NavigateFunction } from 'react-router';

import { initializeApp } from '../@init';

const $navigator = createStore<NavigateFunction | null>(null).on(
  initializeApp,
  (_, { navigate }) => navigate
);

export { $navigator };
