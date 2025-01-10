import clsx from 'clsx';

import { Section, Title } from '@/shared/landing-ui';

interface Master {
  name: string;
  specialization: string;
  avatarUrl: string;
  reviewsCount: number;
  rating: number;
  services: string[];
  description: string;
  isFavorite: boolean;
}

const masters: Master[] = [
  {
    name: 'Алина Ефремова',
    specialization: 'Маникюр',
    avatarUrl: '/assets/masters/master1.png',
    reviewsCount: 123,
    rating: 4.5,
    services: ['Маникюр', 'Педикюр'],
    description:
      'Алина Ефремова - квалифицированный маникюрщик, знающий больше всего о маникюрах.',
    isFavorite: true,
  },
  {
    name: 'Михаил Григорьев',
    specialization: 'Массаж',
    avatarUrl: '/assets/masters/master2.png',
    reviewsCount: 187,
    rating: 4.8,
    services: ['Массаж', 'Физиотерапия'],
    description:
      'Михаил Григорьев - квалифицированный массажист, знающий больше всего о массажах.',
    isFavorite: false,
  },
  {
    name: 'Людмила Кузнецова',
    specialization: 'Услуги косметолога',
    avatarUrl: '/assets/masters/master3.png',
    reviewsCount: 156,
    rating: 4.6,
    services: ['Услуги косметолога', 'Косметология'],
    description:
      'Людмила Кузнецова - квалифицированная косметолог, знающая больше всего о косметологии.',
    isFavorite: true,
  },
  {
    name: 'Иван Кузнецов',
    specialization: 'Репетитор',
    avatarUrl: '/assets/masters/master4.png',
    reviewsCount: 213,
    rating: 4.7,
    services: ['Репетитор', 'Инструментальные звуки'],
    description:
      'Андрей Кузнецов - квалифицированный репетитор, знающий больше всего о репетиторах.',
    isFavorite: false,
  },
];

export const PopularMasters = () => {
  return (
    <Section>
      <div className={clsx('container', 'mx-auto')}>
        <Title center level={2} bold className={clsx('mb-14')}>
          Популярные мастера в вашем городе
        </Title>

        <div
          className={clsx('grid', 'grid-flow-col', 'gap-10', 'justify-start')}
        >
          {masters.map((master) => (
            <div
              key={master.name}
              className={clsx(
                'flex',
                'flex-col',
                'items-center',
                'text-center'
              )}
            >
              <div className={'mb-4'}>
                <div
                  className={clsx(
                    'size-40',
                    'rounded-full',
                    'bg-cover',
                    'bg-center',
                    'shadow-xl'
                  )}
                  style={{ backgroundImage: `url('${master.avatarUrl}')` }}
                />
              </div>

              <div className={clsx('mb-1', 'font-bold')}>{master.name}</div>
              <div className={clsx('mb-1', 'text-sm')}>
                {master.specialization}
              </div>
              <div className={clsx('mb-1', 'text-xs')}>
                {master.description}
              </div>

              <div className={clsx('flex-grow', 'flex', 'items-end')}>
                <div className={clsx('flex', 'gap-2')}>
                  {master.services.map((service) => (
                    <span key={service}>{service}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
