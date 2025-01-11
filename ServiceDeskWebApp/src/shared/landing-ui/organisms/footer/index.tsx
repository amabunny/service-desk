import clsx from 'clsx';

import { aboutLinks, additionalLinks, companyLinks } from '@/services/routes';
import { Card, Link } from '@/shared/landing-ui';

export const Footer = () => {
  return (
    <div>
      <Card rounded={false}>
        <footer>
          <div className={clsx('container', 'mx-auto', 'py-10')}>
            <div
              className={clsx(
                'grid',
                'grid-flow-col',
                'gap-32',
                'justify-start'
              )}
            >
              <div className={clsx('grid')}>
                {aboutLinks.map((link) => (
                  <Link
                    className={clsx('py-2')}
                    key={link.title}
                    to={link.path}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <div className={clsx('grid')}>
                {additionalLinks.map((link) => (
                  <Link
                    className={clsx('py-2')}
                    key={link.title}
                    to={link.path}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <div className={clsx('grid')}>
                {companyLinks.map((link) => (
                  <Link
                    className={clsx('py-2')}
                    key={link.title}
                    to={link.path}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <div>
                <div>
                  Служба поддержки:{' '}
                  <Link to={'tel:88003334545'}>8 800 333-45-45</Link>
                </div>
                <div>Будни: с 6 до 22 Выходные: с 8 до 22</div>
              </div>
            </div>
          </div>
        </footer>
      </Card>
    </div>
  );
};
