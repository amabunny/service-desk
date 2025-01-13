import { useMemo } from 'react';

import { FormErrorsList } from '@/lib/factories/create-form';

interface Props<T extends Record<string, unknown>> {
  errors: FormErrorsList<T>;
  field: keyof T;
}

export const ErrorsMapper = <T extends Record<string, unknown>>({
  errors,
  field,
}: Props<T>) => {
  const errorsByKey = useMemo(() => errors[field], [errors, field]);

  if (!errorsByKey) return null;

  return (
    <ul>
      {errorsByKey.map((error, index) => (
        <li key={index}>{error.message}</li>
      ))}
    </ul>
  );
};
