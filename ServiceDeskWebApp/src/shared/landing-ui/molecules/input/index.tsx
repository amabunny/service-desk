import {
  Description,
  Field,
  Input as HeadlessInput,
  InputProps,
  Label,
} from '@headlessui/react';
import clsx from 'clsx';
import { ReactNode } from 'react';

import { ThemeSizes } from '@/types/ui';

type Props = Omit<InputProps, 'size'> & {
  label?: string;
  description?: ReactNode;
  className?: string;
  size?: ThemeSizes;
};

export const Input = ({
  label,
  description,
  className,
  size = 'medium',
  ...inputProps
}: Props) => {
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

          'focus:outline-none',
          'data-[focus]:outline-2',
          'data-[focus]:-outline-offset-2',

          'data-[focus]:outline-black/10',
          'dark:data-[focus]:outline-white/25',

          size === 'small' && ['text-sm', 'py-1.5', 'px-3'],
          size === 'medium' && ['text-base', 'py-2', 'px-4'],
          size === 'large' && ['text-lg', 'py-3', 'px-5']
        )}
      />
    </Field>
  );
};
