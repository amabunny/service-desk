import clsx from 'clsx';

import { RoutesService } from '@/services/routes.ts';

import { Link } from '../../molecules/link';

interface MenuItem {
  title: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    title: 'Главная',
    path: RoutesService.getIndex(),
  },
  {
    title: 'Найти специалиста',
    path: RoutesService.getFindMaster(),
  },
  {
    title: 'Мои заказы',
    path: RoutesService.getMyOrders(),
  },
  {
    title: 'Стать исполнителем',
    path: RoutesService.getBecomeMaster(),
  },
];

export const Menu = () => {
  return (
    <div>
      <nav>
        <ul
          className={clsx('grid', 'grid-flow-col', 'justify-start', 'text-sm')}
        >
          {menuItems.map((menuItem) => (
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
