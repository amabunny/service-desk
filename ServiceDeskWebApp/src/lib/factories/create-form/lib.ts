import { ZodError } from 'zod';

import { FormErrorsList } from './types';

export const mapZodErrorToUnifiedArray = <T extends Record<string, unknown>>(
  error: ZodError<T>
) =>
  error.errors.reduce((acc, curr): FormErrorsList<T> => {
    const key = curr.path as unknown as keyof T;

    if (acc[key]) {
      acc[key].push({
        message: curr.message,
      });
    } else {
      acc[key] = [
        {
          message: curr.message,
        },
      ];
    }

    return acc;
  }, {} as FormErrorsList<T>);
