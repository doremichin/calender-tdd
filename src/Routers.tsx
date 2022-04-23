import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Main = lazy(() => import('./pages/Main'));
const List = lazy(() => import('./pages/List'));

function Routers() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/list',
      element: <List />,
    },
  ]);

  return routes;
}

export default Routers;
