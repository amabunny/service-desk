import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useUnit } from 'effector-react';

import { appModel } from '@/shared/@app';

export const DarkModeToggle = () => {
  const [theme, changeTheme] = useUnit([appModel.$theme, appModel.toggleTheme]);

  const icon = theme === 'dark' ? faSun : faMoon;

  return (
    <button
      className={clsx(
        'rounded-sm',
        'border',
        'size-5',
        'rounded-xl',
        'flex',
        'justify-center',
        'items-center',
        'transition-all',
        'hover:bg-gray-200',
        'dark:border-gray-500',
        'dark:bg-gray-50/10',
        'dark:hover:bg-gray-50/20'
      )}
      onClick={changeTheme}
    >
      <FontAwesomeIcon
        icon={icon}
        className={clsx('dark:text-orange-400', 'text-sm')}
      />
    </button>
  );
};
