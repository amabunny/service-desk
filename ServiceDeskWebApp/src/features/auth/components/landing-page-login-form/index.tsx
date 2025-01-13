import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { FormEvent } from 'react';

import { ErrorsMapper } from '@/shared/form';
import { Button, Card, Input, Title } from '@/shared/landing-ui';

import { loginFormModel } from '../../model/login-form';

const $username = loginFormModel.$values.map(({ username }) => username);
const $password = loginFormModel.$values.map(({ password }) => password);

export const LandingPageLoginForm = () => {
  const [username, password, errors, changeValues, submitForm] = useUnit([
    $username,
    $password,
    loginFormModel.$errors,
    loginFormModel.changeValues,
    loginFormModel.submitForm,
    loginFormModel.submitFormFx,
  ]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <div className={clsx('flex', 'justify-center')}>
      <Card className={clsx('py-7', 'px-10', 'w-2/6')}>
        <form onSubmit={handleSubmit} className={clsx('grid', 'gap-8')}>
          <div>
            <Title level={3} bold className={clsx('text-center', 'mb-4')}>
              Вход
            </Title>
          </div>

          <div className={clsx('grid', 'gap-5')}>
            <Input
              value={username}
              errorsCount={errors.username?.length}
              autoComplete={'username'}
              description={<ErrorsMapper errors={errors} field={'username'} />}
              onChange={(e) => changeValues({ username: e.target.value })}
              name={'username'}
              label={'Имя пользователя:'}
              className={clsx('w-full')}
            />
            <Input
              value={password}
              errorsCount={errors.password?.length}
              autoComplete={'current-password'}
              description={<ErrorsMapper errors={errors} field={'password'} />}
              onChange={(e) => changeValues({ password: e.target.value })}
              name={'password'}
              label={'Пароль:'}
              type={'password'}
            />
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
