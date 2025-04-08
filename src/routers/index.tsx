import Layout from '@/layouts';
import Login from '@/views/login';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import lazyLoad from './utils/lazyLoad';

export const rootRouter: RouteNamespace.RouteRecord[] = [
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
    redirect: '/dashboard',
    meta: {
      needLogin: true,
    },
    children: [
      {
        path: 'dashboard',
        element: lazyLoad(React.lazy(() => import('@/views/dashboard'))),
        meta: {
          title: 'dashboard',
          needLogin: true,
          menu: true,
          icon: 'wind-cry',
        },
      },
      {
        path: 'chart',
        element: lazyLoad(React.lazy(() => import('@/views/chart'))),
        meta: {
          title: 'chart',
          needLogin: true,
          menu: true,
          icon: 'wind-cry',
        },
        children: [
          {
            path: 'line',
            element: lazyLoad(React.lazy(() => import('@/views/chart/line'))),
            meta: {
              needLogin: true,
              menu: true,
              icon: 'wind-cry',
            },
          },
          {
            path: 'pie',
            element: lazyLoad(React.lazy(() => import('@/views/chart/pie'))),
            meta: {
              needLogin: true,
              menu: true,
              icon: 'wind-cry',
            },
          },
        ],
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
