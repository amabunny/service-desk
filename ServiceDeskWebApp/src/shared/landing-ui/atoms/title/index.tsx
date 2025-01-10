import clsx from 'clsx';
import { ReactNode, useMemo } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
  center?: boolean;
}

export const Title = ({ children, level, bold, className, center }: Props) => {
  const tags = useMemo(
    () =>
      ({
        1: 'h1',
        2: 'h2',
        3: 'h3',
        4: 'h4',
        5: 'h5',
        6: 'h6',
      }) as const,
    []
  );

  const Tag = tags[level];

  return (
    <Tag
      className={clsx(
        bold && ['font-bold'],
        center && ['text-center'],

        level === 1 && ['text-5xl'],
        level === 2 && ['text-4xl'],
        level === 3 && ['text-3xl'],
        level === 4 && ['text-2xl'],
        level === 5 && ['text-xl'],
        level === 6 && ['text-lg'],

        className
      )}
    >
      {children}
    </Tag>
  );
};
