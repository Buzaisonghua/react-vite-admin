import type { MenuProps } from 'antd';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import React from 'react';
import { useSelector } from 'react-redux';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: 'Option 1' },
  { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
  { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
  { key: '11', icon: <PieChartOutlined />, label: 'Option 1' },
  { key: '22', icon: <DesktopOutlined />, label: 'Option 2' },
  { key: '33', icon: <ContainerOutlined />, label: 'Option 3' },
  { key: '14', icon: <PieChartOutlined />, label: 'Option 1' },
  { key: '25', icon: <DesktopOutlined />, label: 'Option 2' },
  { key: '36', icon: <ContainerOutlined />, label: 'Option 3' },
  { key: '17', icon: <PieChartOutlined />, label: 'Option 1' },
  { key: '28', icon: <DesktopOutlined />, label: 'Option 2' },
  { key: '39', icon: <ContainerOutlined />, label: 'Option 3' },
  { key: '111', icon: <PieChartOutlined />, label: 'Option 1' },
  { key: '212', icon: <DesktopOutlined />, label: 'Option 2' },
  { key: '313', icon: <ContainerOutlined />, label: 'Option 3' },
  { key: '114', icon: <PieChartOutlined />, label: 'Option 1' },
  { key: '215', icon: <DesktopOutlined />, label: 'Option 2' },
  { key: '3123', icon: <ContainerOutlined />, label: 'Option 3' },
  { key: '1112', icon: <PieChartOutlined />, label: 'Option 1' },
  { key: '11232', icon: <DesktopOutlined />, label: 'Option 2' },
  { key: '3999999', icon: <ContainerOutlined />, label: 'Option 3' },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10ddsd', label: 'Option 10' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '111111111111111111111', label: 'Option 11' },
          { key: '12a', label: 'Option 12' },
        ],
      },
    ],
  },
];

const MenuComponent: React.FC = () => {
  const { collapsed } = useSelector((state: any) => state.collapsed);

  return (
    <div className="menu-box">
      <div className="menu-list">
        <OverlayScrollbarsComponent
          element="div"
          options={{
            scrollbars: {
              autoHide: 'leave',
            },
          }}
          defer
        >
          <Menu
            defaultSelectedKeys={['']}
            defaultOpenKeys={['']}
            mode="inline"
            theme="light"
            inlineCollapsed={collapsed}
            items={items}
          />
        </OverlayScrollbarsComponent>

      </div>
      {/* <header>
        <HeatMapOutlined />
        Logo
      </header> */}

      <div className="collapsed-box">
        {
          collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
        }
      </div>
    </div>
  );
};

export default MenuComponent;
