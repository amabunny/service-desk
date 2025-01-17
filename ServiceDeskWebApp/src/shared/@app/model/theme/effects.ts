import { appDomain } from '../@init';
import { localStorageThemeSchema } from './schema';
import { AppTheme } from './types';

export const getThemeFromLs = appDomain.createEffect((): Promise<AppTheme> => {
  const theme = localStorage.getItem('theme');

  if (theme === null) {
    const isDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    return isDark ? Promise.resolve('dark') : Promise.resolve('light');
  }

  return localStorageThemeSchema.parseAsync(theme);
});

export const writeThemeToLs = appDomain.createEffect(
  async (currentTheme: AppTheme): Promise<void> => {
    try {
      const theme = await localStorageThemeSchema.parseAsync(
        localStorage.getItem('theme')
      );

      if (theme !== currentTheme) {
        localStorage.setItem('theme', currentTheme);
      }
    } catch {
      localStorage.setItem('theme', currentTheme);
    }
  }
);

export const toggleBodyClass = appDomain.createEffect((theme: AppTheme) => {
  const bodyHasDarkClass = document.body.classList.contains('dark');

  if (bodyHasDarkClass && theme !== 'dark') {
    document.body.classList.remove('dark');
  }

  if (!bodyHasDarkClass && theme === 'dark') {
    document.body.classList.add('dark');
  }
});
