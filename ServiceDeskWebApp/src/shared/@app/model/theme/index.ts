import { sample } from 'effector';

import { appDomain, initializeApp } from '../@init';
import { getThemeFromLs, toggleBodyClass, writeThemeToLs } from './effects';
import { AppTheme } from './types.ts';

const toggle = appDomain.createEvent();

const $value = appDomain.createStore<AppTheme>('light');

$value
  .on(getThemeFromLs.doneData, (_, theme) => theme)
  .on(toggle, (state) => (state === 'dark' ? 'light' : 'dark'));

sample({
  clock: initializeApp,
  target: getThemeFromLs,
});

sample({
  clock: $value,
  target: writeThemeToLs,
});

sample({
  clock: $value,
  target: toggleBodyClass,
});

export { $value, toggle };
