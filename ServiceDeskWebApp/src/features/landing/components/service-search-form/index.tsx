import clsx from 'clsx';

import { Button, Card, Input, Section, Title } from '@/shared/landing-ui';

export const ServiceSearchForm = () => {
  return (
    <Section>
      <Card className={clsx('my-14', 'container', 'mx-auto', 'py-10', 'px-10')}>
        <Title level={2} bold className={clsx('mb-4')}>
          Для любой задачи есть мастер
        </Title>

        <div className={clsx('mb-8')}>
          15 170 060 клиентов доверили дела профи
        </div>

        <form>
          <div
            className={clsx(
              'grid',
              'grid-flow-col',
              'grid-cols-[1fr_auto]',
              'gap-5'
            )}
          >
            <Input type="text" placeholder="Поиск услуги" size={'large'} />

            <div>
              <Button type="submit" size={'large'}>
                Найти
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </Section>
  );
};
