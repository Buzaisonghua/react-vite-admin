import Layout from '@/layouts';
import Login from '@/views/login';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import lazyLoad from './utils/lazyLoad';

const rootRouter: RouteNamespace.RouteRecord[] = [
  {
    path: '/login',
    element: <Login />,
    meta: {
      title: '登录页',
    },
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: lazyLoad(React.lazy(() => import('@/views/dashboard'))),
        meta: {
          title: 'dashboard',
        },
      },

    ],
  },
  {
    path: '*',
    element: lazyLoad(React.lazy(() => import('@/views/error/404'))),
  },
];

function Router() {
  const routes = useRoutes(rootRouter);
  return routes;
}

export default Router;
