import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router';
import { useLocation } from 'react-router';

type Props = PropsWithChildren<
  LinkProps & {
    activeClassName?: string;
  }
>;

export const Link = ({ className, activeClassName, to, ...rest }: Props) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <RouterLink
      className={clsx(
        className,
        'text-blue-800',
        'hover:text-blue-500',
        'dark:text-blue-100',
        'dark:hover:text-blue-600',

        isActive && [activeClassName, 'text-blue-900']
      )}
      to={to}
      {...rest}
    />
  );
};
