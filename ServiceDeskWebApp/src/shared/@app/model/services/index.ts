import { NavigateFunction } from 'react-router';

import { appDomain, initializeApp } from '../@init';

const $navigator = appDomain
  .createStore<NavigateFunction | null>(null)
  .on(initializeApp, (_, { navigate }) => navigate);

export { $navigator };
