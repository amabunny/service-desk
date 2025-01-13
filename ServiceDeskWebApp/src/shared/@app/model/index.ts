import { appDomain, initializeApp } from './@init';
import * as auth from './auth';
import * as services from './services';
import * as theme from './theme';

export type { Tokens } from './auth/types';
export type { AppTheme } from './theme/types';

export const appModels = {
  appDomain,
  initializeApp,
  services,
  theme,
  auth,
};
