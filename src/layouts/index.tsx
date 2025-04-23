import { useLayoutResize } from '@/hooks';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import LayoutBg from './components/LayoutBg';
import Menu from './components/Menu';
import './index.less';

function LayoutContainer() {
  // 导航信息收缩
  const { collapsed, mobile, mobileCollapsed } = useSelector((state: any) => state.app);
  const showMask = useMemo(() => {
    return mobile && mobileCollapsed;
  }, [mobile, mobileCollapsed]);
  useLayoutResize();
  return (
    <>
      <Header />
      <div className="layout-main">
        <Menu />
        <div
          className={
            `layout-content
          ${collapsed ? 'collapsed-close' : 'collapsed-open'}
          ${showMask ? 'layout-mask' : ''}
          ${mobile ? 'layout-mobile' : ''}
        `
          }
        >
          <Outlet />
        </div>
      </div>
      <LayoutBg />
    </>
  );
}

export default LayoutContainer;
