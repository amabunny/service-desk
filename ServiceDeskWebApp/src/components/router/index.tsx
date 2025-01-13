import { lazy } from 'react';
import { Route, Routes } from 'react-router';

import { RoutesService } from '@/services/routes';
import { RouteParams } from '@/types/router';

const routes: RouteParams[] = [
  {
    index: true,
    Component: lazy(() => import('@/pages')),
  },
  {
    path: RoutesService.getFindMaster(),
    Component: lazy(() => import('@/pages/find-master')),
  },
  {
    path: RoutesService.getMyOrders(),
    Component: lazy(() => import('@/pages/my-orders')),
  },
  {
    path: RoutesService.getBecomeMaster(),
    Component: lazy(() => import('@/pages/become-master')),
  },
  {
    path: RoutesService.getLoginPage(),
    Component: lazy(() => import('@/pages/login')),
  },
];

export const Router = () => {
  return (
    <Routes>
      {routes.map(({ index, Component, path }) => (
        <Route
          index={index}
          key={path ?? ''}
          path={path}
          element={<Component />}
        />
      ))}
    </Routes>
  );
};
