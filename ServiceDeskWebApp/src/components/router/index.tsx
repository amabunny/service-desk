import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { RouteParams } from '@/types/router';

const routes: RouteParams[] = [
  {
    index: true,
    Component: lazy(() => import('@/pages')),
  },
];

export const Router = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
