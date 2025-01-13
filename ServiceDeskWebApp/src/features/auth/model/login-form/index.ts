import { AxiosError } from 'axios';
import { createEffect, sample } from 'effector';

import { serviceDeskApi } from '@/api';
import { TokenResponse } from '@/api/service-desk/data-contracts.ts';
import { createForm, FormError } from '@/lib/factories/create-form';
import { RoutesService } from '@/services/routes.ts';
import { appModels } from '@/shared/@app';

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
      if (!data.value) throw new Error();
      return data.value;
    } catch (e) {
      if (e instanceof AxiosError && e.response?.status === 401) {
        throw new FormError<LoginFormData>({
          password: [{ message: 'Неверное имя пользователя или пароль' }],
        });
      }
      throw new FormError<LoginFormData>({
        password: [{ message: e?.toString() ?? 'Неизвестная ошибка' }],
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
  clock: handleSubmitFx.done,
  source: appModels.services.$navigator,
}).watch((navigator) => navigator?.(RoutesService.getIndex()));
