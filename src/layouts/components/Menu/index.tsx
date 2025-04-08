import { rootRouter } from '@/routers';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// type MenuTheme = GetProp<MenuProps, 'theme'>;

interface MenuItem {
  key: string
  icon?: React.ReactNode
  label?: React.ReactNode
  children?: MenuItem[]
};

/** 递归函数 处理路由 */
function setRootRouter(rootRouter: RouteNamespace.RouteRecord[], menuList: MenuItem[]) {
  for (const item of rootRouter) {
    if (item.meta?.menu) {
      const data: MenuItem = {
        key: item.path || '',
        icon: item.meta.icon,
        label: item.meta.title,
      };
      if (item.children) {
        data.children = [];
        setRootRouter(item.children, data.children);
      }
      // else {
      //   delete data.children;
      // }
      menuList.push(data);
    }
    if (!item.meta?.menu && item.children) {
      setRootRouter(item.children, menuList);
    }
  }
}

function MenuComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 导航信息收缩
  const { collapsed } = useSelector((state: any) => state.collapsed);
  // 路由信息
  const menuList: MenuItem[] = [];
  setRootRouter(rootRouter, menuList);

  const clickChangeCollapsed = () => {
    dispatch({ type: 'collapsed/changeCollapsed' });
  };

  // 路由跳转
  const clickMenuChangeRoute = (e: any) => {
    const path = `/${e.keyPath.reverse().join('/')}`;
    navigate(path);
  };

  return (
    <div className="menu-box">
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax="100%"
        thumbMinSize={30}
        universal
        style={{ width: '100%', height: '100%' }}
        className="scrollbar"
      >
        <Menu
          defaultSelectedKeys={['']}
          defaultOpenKeys={['']}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={menuList}
          onClick={clickMenuChangeRoute}
        />
      </Scrollbars>

      <div className="collapsed-box" onClick={clickChangeCollapsed}>
        {
          collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
        }
      </div>
    </div>
  );
}

export default MenuComponent;

// type MenuItem = Required<MenuProps>['items'][number];

// const items: MenuItem[] = [
//   { key: '1', icon: <PieChartOutlined />, label: 'Option 1' },
//   { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
//   { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
//   { key: '11', icon: <PieChartOutlined />, label: 'Option 1' },
//   { key: '22', icon: <DesktopOutlined />, label: 'Option 2' },
//   { key: '33', icon: <ContainerOutlined />, label: 'Option 3' },
//   { key: '14', icon: <PieChartOutlined />, label: 'Option 1' },
//   { key: '25', icon: <DesktopOutlined />, label: 'Option 2' },
//   { key: '36', icon: <ContainerOutlined />, label: 'Option 3' },
//   { key: '17', icon: <PieChartOutlined />, label: 'Option 1' },
//   { key: '28', icon: <DesktopOutlined />, label: 'Option 2' },
//   { key: '39', icon: <ContainerOutlined />, label: 'Option 3' },
//   { key: '111', icon: <PieChartOutlined />, label: 'Option 1' },
//   { key: '212', icon: <DesktopOutlined />, label: 'Option 2' },
//   { key: '313', icon: <ContainerOutlined />, label: 'Option 3' },
//   { key: '114', icon: <PieChartOutlined />, label: 'Option 1' },
//   { key: '215', icon: <DesktopOutlined />, label: 'Option 2' },
//   { key: '3123', icon: <ContainerOutlined />, label: 'Option 3' },
//   { key: '1112', icon: <PieChartOutlined />, label: 'Option 1' },
//   { key: '11232', icon: <DesktopOutlined />, label: 'Option 2' },
//   { key: '3999999', icon: <ContainerOutlined />, label: 'Option 3' },
//   {
//     key: 'sub1',
//     label: 'Navigation One',
//     icon: <MailOutlined />,
//     children: [
//       { key: '5', label: 'Option 5' },
//       { key: '6', label: 'Option 6' },
//       { key: '7', label: 'Option 7' },
//       { key: '8', label: 'Option 8' },
//     ],
//   },
//   {
//     key: 'sub2',
//     label: 'Navigation Two',
//     icon: <AppstoreOutlined />,
//     children: [
//       { key: '9', label: 'Option 9' },
//       { key: '10ddsd', label: 'Option 10' },
//       {
//         key: 'sub3',
//         label: 'Submenu',
//         children: [
//           { key: '111111111111111111111', label: 'Option 11' },
//           { key: '12a', label: 'Option 12' },
//         ],
//       },
//     ],
//   },
// ];
