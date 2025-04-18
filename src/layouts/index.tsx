import { useLayoutResize } from '@/hooks';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import LayoutBg from './components/LayoutBg';
import Menu from './components/Menu';
import './index.less';

function LayoutContainer() {
  // 导航信息收缩
  const { collapsed } = useSelector((state: any) => state.app);
  useLayoutResize();
  return (
    <>
      <Header />
      <Menu />
      <LayoutBg />
      <div className={`layout-content ${collapsed ? 'collapsed-close' : 'collapsed-open'}`}>
        <Outlet />
      </div>
    </>
  );
}

export default LayoutContainer;
