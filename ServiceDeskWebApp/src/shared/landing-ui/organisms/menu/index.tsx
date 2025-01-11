import clsx from 'clsx';

import { mainLinks } from '@/services/routes';

import { Link } from '../../molecules/link';

export const Menu = () => {
  return (
    <div>
      <nav>
        <ul
          className={clsx(
            'grid',
            'grid-flow-col',
            'justify-start',
            'text-sm',
            '-mx-5'
          )}
        >
          {mainLinks.map((menuItem) => (
            <li key={menuItem.title}>
              <Link
                className={clsx('py-4', 'px-5', 'inline-block')}
                activeClassName={clsx('bg-gray-100', 'dark:bg-zinc-900')}
                to={menuItem.path}
              >
                {menuItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
