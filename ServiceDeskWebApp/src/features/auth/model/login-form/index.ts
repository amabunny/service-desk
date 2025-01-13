import { AxiosError } from 'axios';
import { createEffect, sample } from 'effector';

import { serviceDeskApi } from '@/api';
import { TokenResponse } from '@/api/service-desk/data-contracts';
import { createForm, FormError } from '@/lib/factories/create-form';
import { RoutesService } from '@/services/routes';
import { appModels, Tokens } from '@/shared/@app';

import { loginFormSchema } from './schema';

type LoginFormData = {
  username: string;
  password: string;
};

const handleSubmitFx = createEffect<
  LoginFormData,
  TokenResponse,
  FormError<LoginFormData>
>({
  handler: async (values) => {
    try {
      const { data } = await serviceDeskApi.authLoginPost(values);
      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 401) {
          throw new FormError<LoginFormData>({
            password: [{ message: 'Неверное имя пользователя или пароль' }],
          });
        }

        throw new FormError<LoginFormData>({
          password: [{ message: `Ошибка сервера: ${e.response?.status}` }],
        });
      }
      console.warn(e);
      throw new FormError<LoginFormData>({
        password: [{ message: 'Неизвестная ошибка' }],
      });
    }
  },
});

export const loginFormModel = createForm({
  zodSchema: loginFormSchema,
  initialData: {
    username: '',
    password: '',
  },
  handleSubmit: handleSubmitFx,
});

sample({
  clock: handleSubmitFx.doneData.map(
    (data) =>
      ({
        accessToken: data.accessToken ?? '',
        refreshToken: data.refreshToken ?? '',
      }) satisfies Tokens
  ),
  target: appModels.auth.setTokens,
});

sample({
  clock: handleSubmitFx.done,
  source: appModels.services.$navigator,
}).watch((navigator) => navigator?.(RoutesService.getIndex()));
