import { Button as HeadlessUIButton } from '@headlessui/react';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({ children, className, size = 'medium' }: Props) => {
  return (
    <HeadlessUIButton
      className={clsx(
        className,
        'inline-flex',
        'gap-2',
        'items-center',
        'rounded-full',
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
        size === 'medium' && ['py-1.5', 'px-3', 'text-base']
      )}
    >
      {children}
    </HeadlessUIButton>
  );
};
