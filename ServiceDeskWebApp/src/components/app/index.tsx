import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { appModels } from '@/shared/@app';

import { Router } from '../router';

console.log(1);

export const App = () => {
  const navigate = useNavigate();
  const initApp = useUnit(appModels.initializeApp);

  useEffect(() => {
    initApp({ navigate });
  }, [initApp, navigate]);

  return <Router />;
};
