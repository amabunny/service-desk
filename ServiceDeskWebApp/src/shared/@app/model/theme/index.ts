import { createEvent, createStore, sample } from 'effector';

import { initializeApp } from '../@init';
import { getThemeFromLs, toggleBodyClass, writeThemeToLs } from './effects';
import { AppTheme } from './types.ts';

const toggle = createEvent();

const $value = createStore<AppTheme>('light');

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
