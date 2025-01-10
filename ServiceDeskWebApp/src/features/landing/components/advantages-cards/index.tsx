import {
  faClock,
  faMedal,
  faMoneyBill,
  faStar,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { Card, Section } from '@/shared/landing-ui';

interface Advantage {
  title: string;
  description: string;
  icon: IconDefinition;
}

const advantages: Advantage[] = [
  {
    title: 'Лучшие специалисты города',
    description: `Мы собрали для Вас услуги лучших специалистов, готовых взять
     ваш заказ в удобное для вас время`,
    icon: faMedal,
  },
  {
    title: 'Высокое качество обслуживания',
    description: `Все специалисты проходят строгий отбор, чтобы 
    гарантировать высокий уровень услуг.`,
    icon: faStar,
  },
  {
    title: 'Гибкое расписание',
    description: `Вы сами выбираете удобное время и место для оказания услуги, 
    мы подстроимся под ваш график.`,
    icon: faClock,
  },
  {
    title: 'Прозрачная система цен',
    description: `Вы видите полную стоимость услуги перед подтверждением заказа,
     никаких скрытых платежей.`,
    icon: faMoneyBill,
  },
];

export const AdvantagesCards = () => {
  return (
    <Section>
      <div className={clsx('container', 'mx-auto')}>
        <div className={clsx('grid', 'grid-flow-col', 'gap-5')}>
          {advantages.map((advantage) => (
            <Card
              indents
              key={advantage.title}
              className={clsx('flex', 'flex-col', 'items-center')}
            >
              <div className={clsx('h-28', 'mb-5')}>
                <FontAwesomeIcon
                  icon={advantage.icon}
                  className={clsx('h-full', 'text-zinc-500')}
                />
              </div>

              <div
                className={clsx(
                  'text-center',
                  'flex-grow',
                  'flex',
                  'items-center',
                  'mb-3',
                  'font-bold'
                )}
              >
                {advantage.title}
              </div>

              <div
                className={clsx(
                  'text-sm',
                  'flex-grow',
                  'flex',
                  'text-center',
                  'items-center'
                )}
              >
                {advantage.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
