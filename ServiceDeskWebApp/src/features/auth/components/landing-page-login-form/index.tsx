import clsx from 'clsx';

import { Button, Card, Input, Title } from '@/shared/landing-ui';

export const LandingPageLoginForm = () => {
  return (
    <div className={clsx('flex', 'justify-center')}>
      <Card className={clsx('py-7', 'px-10', 'w-2/6')}>
        <form className={clsx('grid', 'gap-8')}>
          <div>
            <Title level={3} bold className={clsx('text-center', 'mb-4')}>
              Вход
            </Title>
          </div>

          <div className={clsx('grid', 'gap-5')}>
            <Input
              name={'mail'}
              label={'Электронная почта:'}
              className={clsx('w-full')}
            />
            <Input name={'password'} label={'Пароль:'} type={'password'} />
          </div>

          <div
            className={clsx(
              'text-center',
              'mt-4',
              'grid',
              'gap-5',
              'grid-flow-col',
              'justify-center'
            )}
          >
            <Button type={'submit'}>Войти</Button>
            <Button>Регистрация</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
