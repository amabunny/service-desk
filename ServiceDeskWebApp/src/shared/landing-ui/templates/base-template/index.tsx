import clsx from 'clsx';
import { ReactNode } from 'react';

import { Footer } from '../../organisms/footer';
import { Header } from '../../organisms/header';

interface Props {
  headerGap?: boolean;
  container?: boolean;
  containerVerticalIndents?: boolean;
  showFooter?: boolean;
  children: ReactNode;
}

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

      {showFooter && <Footer />}
    </div>
  );
};
