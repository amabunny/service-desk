import { Button as HeadlessUIButton, ButtonProps } from '@headlessui/react';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({
  children,
  className,
  size = 'medium',
  ...rest
}: Props & ButtonProps) => {
  return (
    <HeadlessUIButton
      className={clsx(
        className,
        'inline-flex',
        'gap-2',
        'items-center',
        'rounded-xl',
        'text-white',
        'bg-zinc-700',
        'data-[hover]:bg-zinc-600',
        'data-[open]:bg-zinc-800',
        'data-[focus]:outline-1',
        'data-[focus]:outline-white',
        'focus:outline-none ',
        'font-semibold',
        'shadow-inner',
        'shadow-white/10',
        'font-light',

        size === 'small' && ['py-1', 'px-4', 'text-sm'],
        size === 'medium' && ['py-1.5', 'px-6', 'text-base'],
        size === 'large' && ['py-3', 'px-8', 'text-lg']
      )}
      {...rest}
    >
      {children}
    </HeadlessUIButton>
  );
};
