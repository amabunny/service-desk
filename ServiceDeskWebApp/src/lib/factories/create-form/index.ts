import { createDomain, sample } from 'effector';
import { Effect } from 'effector';
import { ZodError, ZodSchema } from 'zod';

import { mapZodErrorToUnifiedArray } from './lib';
import { FormError, FormErrorsList } from './types';

export interface CreateFormParams<
  T extends Record<string, unknown>,
  R extends Record<string, unknown>,
  SR extends Record<string, unknown>,
> {
  domainName?: string;
  initialData: T;
  handleSubmit?: Effect<R, SR, FormError<T>>;
  zodSchema: ZodSchema<R>;
}

export { FormError };
export type { FormErrorsList };

export const createForm = <
  T extends Record<string, unknown>,
  R extends Record<string, unknown>,
  SR extends Record<string, unknown>,
>({
  initialData,
  handleSubmit,
  domainName,
  zodSchema,
}: CreateFormParams<T, R, SR>) => {
  const domain = createDomain(domainName);

  const changeValues = domain.createEvent<Partial<T>>();
  const submitForm = domain.createEvent();
  const validate = domain.createEvent();
  const validateAndSubmit = domain.createEvent();
  const reset = domain.createEvent();

  const submitFormFx = domain.createEffect<R, SR, FormError<R>>({
    handler: handleSubmit,
  });
  const validateFormValuesFx = domain.createEffect<T, R, ZodError<R>>({
    handler: (values: T): Promise<R> => zodSchema.parseAsync(values),
  });

  const $values = domain.createStore(initialData);
  const $errors = domain.createStore<FormErrorsList<R>>({});
  const $touched = domain.createStore(false);

  $values
    .on(changeValues, (state, values) => ({ ...state, ...values }))
    .on(reset, () => initialData);

  $errors
    .on(validateFormValuesFx.done, () => ({}))
    .on(validateFormValuesFx.failData, (_, payload) =>
      mapZodErrorToUnifiedArray(payload)
    )
    .on(submitFormFx.failData, (_, error) => error.errorsList);

  $touched.on(changeValues, () => true).on(reset, () => false);

  sample({
    clock: submitForm,
    target: validateAndSubmit,
  });

  sample({
    clock: validate,
    source: $values,
    validateFormValuesFx,
  });

  const validateAndSubmitTriggered = sample({
    clock: validateAndSubmit,
    source: $values,
    target: validateFormValuesFx,
  });

  sample({
    clock: validateAndSubmitTriggered.doneData,
    target: submitFormFx,
  });

  return {
    domain,
    $values,
    $touched,
    $errors,
    changeValues,
    submitForm,
    submitFormFx,
    validate,
    reset,
  };
};
