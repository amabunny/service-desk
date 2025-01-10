import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import { Header } from '../../organisms/header';

type Props = PropsWithChildren<{
  headerGap?: boolean;
  container?: boolean;
}>;

export const BaseTemplate = ({ children, headerGap, container }: Props) => {
  return (
    <div
      className={clsx('grid', 'grid-flow-row', 'relative', {
        'gap-5': headerGap,
      })}
    >
      <Header />

      <main>
        <div className={clsx(container && ['container', 'mx-auto'])}>
          {children}
        </div>
      </main>
    </div>
  );
};
