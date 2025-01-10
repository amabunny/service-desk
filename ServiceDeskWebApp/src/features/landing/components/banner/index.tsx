import clsx from 'clsx';

import { Title } from '@/shared/landing-ui';

import { ServicesList } from '../services-list';
import classes from './style.module.css';

export const Banner = () => {
  return (
    <div className={clsx(classes.banner, 'h-[430px]', 'rounded-b-xl')}>
      <div
        className={clsx(
          'container',
          'mx-auto',
          'h-full',
          'flex',
          'flex-col',
          'justify-center',
          'gap-5'
        )}
      >
        <div>
          <Title
            className={clsx(
              'inline-block',
              'text-white',
              'bg-zinc-900/50',
              'backdrop-blur',
              'px-5',
              'py-7',
              'rounded-xl'
            )}
            level={1}
            bold
          >
            Найдите мастера за 5 минут
          </Title>
        </div>

        <div>
          <ServicesList />
        </div>
      </div>
    </div>
  );
};
