import clsx from 'clsx';
import { useNavigate } from 'react-router';

import { RoutesService } from '@/services/routes.ts';

import { Button } from '../../molecules/button';
import { DarkModeToggle } from '../dark-mode-toggle';
import { Menu } from '../menu';

export const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    void navigate(RoutesService.getLoginPage());
  };

  return (
    <header
      className={clsx(
        'bg-white',
        'dark:bg-zinc-900/50',
        'dark:backdrop-blur',
        'shadow-sm',
        'sticky',
        'top-0',
        'z-50'
      )}
    >
      <div className={clsx('container', 'mx-auto')}>
        <div className={clsx('flex', 'justify-between', 'items-center')}>
          <Menu />

          <div
            className={clsx('grid', 'gap-5', 'grid-flow-col', 'items-center')}
          >
            <div>
              <DarkModeToggle />
            </div>

            <div>
              <Button size={'small'} onClick={handleLoginClick}>
                Войти
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
