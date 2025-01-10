import { createStore } from 'effector';

import { AppTheme } from './types';

export const $theme = createStore<AppTheme>('light');
