import { useUnit } from 'effector-react';
import { useEffect } from 'react';

import { appModel } from '@/shared/@app';

import { Router } from '../router';

export const App = () => {
  const initAppEvent = useUnit(appModel.init);

  useEffect(() => {
    initAppEvent();
  }, [initAppEvent]);

  return <Router />;
};
