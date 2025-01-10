import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import { Card } from '@/shared/landing-ui';

import { Header } from '../../organisms/header';

type Props = PropsWithChildren<{
  headerGap?: boolean;
  container?: boolean;
  containerVerticalIndents?: boolean;
  showFooter?: boolean;
}>;

export const BaseTemplate = ({
  children,
  headerGap,
  container,
  containerVerticalIndents,
  showFooter,
}: Props) => {
  return (
    <div
      className={clsx('grid', 'grid-flow-row', 'relative', {
        'gap-5': headerGap,
      })}
    >
      <Header />

      <main>
        <div
          className={clsx(
            container && ['container', 'mx-auto'],
            containerVerticalIndents && ['py-10']
          )}
        >
          {children}
        </div>
      </main>

      {showFooter && (
        <Card rounded={false}>
          <footer className={clsx('min-h-72')}>
            <div className={clsx('container', 'mx-auto', 'py-5')}>
              <p> 2025 - Landing Page </p>
            </div>
          </footer>
        </Card>
      )}
    </div>
  );
};
