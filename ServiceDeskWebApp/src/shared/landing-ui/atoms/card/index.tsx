import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
  indents?: boolean;
  rounded?: boolean;
}

export const Card = ({
  children,
  indents,
  className,
  rounded = true,
}: Props) => {
  return (
    <div
      className={clsx(
        className,

        'bg-white',
        'dark:bg-zinc-900/50',
        'text-black',
        'dark:text-white',
        'shadow-sm',

        indents && ['py-5', 'px-7'],
        rounded && ['rounded-xl']
      )}
    >
      {children}
    </div>
  );
};
