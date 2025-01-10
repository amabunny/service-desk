import { sample } from 'effector';

import { getThemeFromLs, toggleBodyClass, writeThemeToLs } from './effects';
import { init, toggleTheme } from './events';
import { $theme } from './stores';

$theme
  .on(getThemeFromLs.doneData, (_, theme) => theme)
  .on(toggleTheme, (state) => (state === 'dark' ? 'light' : 'dark'));

sample({
  clock: init,
  target: getThemeFromLs,
});

sample({
  clock: $theme,
  target: writeThemeToLs,
});

sample({
  clock: $theme,
  target: toggleBodyClass,
});

export { $theme, init, toggleTheme };
