import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Section = ({ children, className }: Props) => (
  <section className={clsx(className, 'my-14')}>{children}</section>
);
