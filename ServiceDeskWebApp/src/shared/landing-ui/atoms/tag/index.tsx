import clsx from 'clsx';
import { ReactNode } from 'react';

import { ThemeColors, ThemeSizes } from '@/types/ui';

interface Props {
  children: ReactNode;
  color?: ThemeColors;
  size?: ThemeSizes;
}

export const Tag = ({
  children,
  color = 'default',
  size = 'medium',
}: Props) => {
  return (
    <span
      className={clsx(
        'text-xs',
        'rounded-lg',

        color === 'default' && ['text-white', 'bg-zinc-600', 'dark:bg-white/5'],
        size === 'medium' && ['py-1', 'px-3']
      )}
    >
      {children}
    </span>
  );
};
