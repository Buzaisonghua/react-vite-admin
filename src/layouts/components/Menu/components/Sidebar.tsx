import SvgIcon from '@/icons/SvgIcon';
import { rootRouter } from '@/routers';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface MenuItem {
  key: string
  icon?: React.ReactNode
  label?: React.ReactNode
  children?: MenuItem[]
};

/** 获取当前路由 */
const defaultSelectedKeys: string[] = [];
function getCurrentRoute(menuList: MenuItem[], path: string) {
  for (const item of menuList) {
    if (path.includes(item.key)) {
      defaultSelectedKeys.push(item.key);
    }
    if (item.children) {
      getCurrentRoute(item.children, path);
    }
  }
}
/** 递归函数 处理路由 */
function setRootRouter(rootRouter: RouteNamespace.RouteRecord[], menuList: MenuItem[]) {
  for (const item of rootRouter) {
    if (item.meta?.menu) {
      const data: MenuItem = {
        key: item.path || '',
        icon: <SvgIcon iconClass={item.meta.icon} />,
        label: item.meta.title,
      };
      if (item.children) {
        data.children = [];
        setRootRouter(item.children, data.children);
      }
      menuList.push(data);
    }
    if (!item.meta?.menu && item.children) {
      setRootRouter(item.children, menuList);
    }
  }
}

export default React.memo((props: { collapsed: boolean }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { collapsed } = props;

  function clickChangeCollapsed() {
    dispatch({ type: 'app/changeCollapsed' });
  }

  // 路由跳转
  function clickMenuChangeRoute(e: any) {
    const path = `/${e.keyPath.reverse().join('/')}`;
    navigate(path);
  }

  // 路由信息
  const menuList: MenuItem[] = [];
  setRootRouter(rootRouter, menuList);
  getCurrentRoute(menuList, window.location.pathname);

  return (
    <div className="menu-box">
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax="100%"
        thumbMinSize={16}
        universal
        style={{ width: '100%', height: '100%' }}
        className="scrollbar"
      >
        <Menu
          defaultSelectedKeys={defaultSelectedKeys}
          defaultOpenKeys={collapsed ? [] : defaultSelectedKeys}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={menuList}
          onClick={clickMenuChangeRoute}
          className="menu-list"
        />
      </Scrollbars>

      <div className="collapsed-box" onClick={clickChangeCollapsed}>
        {
          collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
        }
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.collapsed === nextProps.collapsed;
});
