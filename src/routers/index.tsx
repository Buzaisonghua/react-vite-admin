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
          title: '首页',
          needLogin: true,
          menu: true,
          icon: 'database',
        },
      },
      {
        path: 'chart',
        element: lazyLoad(React.lazy(() => import('@/views/chart'))),
        meta: {
          title: '图表',
          needLogin: true,
          menu: true,
          icon: 'application',
        },
        children: [
          {
            path: 'line',
            element: lazyLoad(React.lazy(() => import('@/views/chart/line'))),
            meta: {
              needLogin: true,
              menu: true,
              title: '折线图',
              icon: 'chart-line',
            },
          },
          {
            path: 'pie',
            element: lazyLoad(React.lazy(() => import('@/views/chart/pie'))),
            meta: {
              needLogin: true,
              menu: true,
              title: '饼图',
              icon: 'chart-pie-alt',
            },
          },
        ],
      },
      {
        path: 'icon',
        element: lazyLoad(React.lazy(() => import('@/views/icon'))),
        meta: {
          title: '图标',
          needLogin: true,
          menu: true,
          icon: 'collection',
        },
        children: [
          {
            path: 'antd',
            element: lazyLoad(React.lazy(() => import('@/views/icon/antd'))),
            meta: {
              needLogin: true,
              menu: true,
              title: 'ANTD图标',
            },
          },
          {
            path: 'custom',
            element: lazyLoad(React.lazy(() => import('@/views/icon/custom'))),
            meta: {
              needLogin: true,
              menu: true,
              title: '自定义图标',
            },
          },
        ],
      },
      {
        path: 'menu',
        element: lazyLoad(React.lazy(() => import('@/views/menu'))),
        meta: {
          title: '路由嵌套',
          needLogin: true,
          menu: true,
          icon: 'application',
        },
        children: [
          {
            path: 'menu_1',
            element: lazyLoad(React.lazy(() => import('@/views/menu/menu_1'))),
            meta: {
              title: '路由嵌套_1',
              needLogin: true,
              menu: true,
            },
          },
          {
            path: 'menu_2',
            element: lazyLoad(React.lazy(() => import('@/views/menu/menu_2'))),
            meta: {
              title: '路由嵌套_2',
              needLogin: true,
              menu: true,
            },
            children: [
              {
                path: 'menu_2_1',
                element: lazyLoad(React.lazy(() => import('@/views/menu/menu_2/menu_2_1'))),
                meta: {
                  title: '路由嵌套_2_1',
                  needLogin: true,
                  menu: true,
                },
                children: [
                  {
                    path: 'menu_2_1_1',
                    element: lazyLoad(React.lazy(() => import('@/views/menu/menu_2/menu_2_1/menu_2_1_1'))),
                    meta: {
                      title: '路由嵌套_2_1_1',
                      needLogin: true,
                      menu: true,
                    },
                  },
                ],
              },
              {
                path: 'menu_2_2',
                element: lazyLoad(React.lazy(() => import('@/views/menu/menu_2/menu_2_2'))),
                meta: {
                  title: '路由嵌套_2_2',
                  needLogin: true,
                  menu: true,
                },
              },
            ],
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
