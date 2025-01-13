import {
  Description,
  Field,
  Input as HeadlessInput,
  InputProps,
  Label,
} from '@headlessui/react';
import clsx from 'clsx';
import { ReactNode, useMemo } from 'react';

import { ThemeSizes } from '@/types/ui';

type Props = Omit<InputProps, 'size'> & {
  label?: string;
  description?: ReactNode;
  className?: string;
  size?: ThemeSizes;
  errorsCount?: boolean | number;
};

export const Input = ({
  label,
  description,
  className,
  errorsCount,
  size = 'medium',
  ...inputProps
}: Props) => {
  const inputHasErrors = useMemo(() => {
    switch (typeof errorsCount) {
      case 'number':
        return errorsCount > 0;

      case 'undefined':
      default:
        return false;
    }
  }, [errorsCount]);

  return (
    <Field className={clsx(className)}>
      {label && (
        <Label
          className={clsx(
            'font-medium',
            'dark:text-white',
            'mb-1',
            'inline-block',

            size === 'small' && ['text-sm'],
            size === 'medium' && ['text-base'],
            size === 'large' && ['text-lg']
          )}
        >
          {label}
        </Label>
      )}

      {description && (
        <Description
          as={'div'}
          className={clsx(
            'text-xs',
            'text-zinc-500',
            'dark:text-white/50',
            'mb-3',

            size === 'small' && ['text-sm'],
            size === 'medium' && ['text-base'],
            size === 'large' && ['text-lg']
          )}
        >
          {description}
        </Description>
      )}

      <HeadlessInput
        {...inputProps}
        className={clsx(
          'block',
          'w-full',
          'rounded-lg',
          'border-none',
          'bg-zinc-100',
          'dark:bg-white/5',
          'dark:text-white',

          'outline-none',
          'outline-2',
          '-outline-offset-2',

          inputHasErrors
            ? clsx('outline-red-500', 'dark:outline-red-700')
            : clsx('focus:outline-black/10', 'dark:focus:outline-white/25'),

          size === 'small' && ['text-sm', 'py-1.5', 'px-3'],
          size === 'medium' && ['text-base', 'py-2', 'px-4'],
          size === 'large' && ['text-lg', 'py-3', 'px-5']
        )}
      />
    </Field>
  );
};
