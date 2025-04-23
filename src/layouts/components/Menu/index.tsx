import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import './index.less';

function MenuComponent() {
  const dispatch = useDispatch();
  // 导航信息收缩
  const { collapsed, mobile, mobileCollapsed } = useSelector((state: any) => state.app);

  const clickChangeMobileCollapsed = () => {
    dispatch({ type: 'app/changeMobileCollapsed', payload: { collapsed: false } });
  };

  return (
    <>
      <div className={
        `
      menu-main
      ${mobile
      ? mobileCollapsed ? 'mobile-open mobile' : 'mobile-close mobile'
      : collapsed ? 'collapsed-close' : 'collapsed-open'}
      `
      }
      >
        <Sidebar collapsed={collapsed} />
      </div>
      {
        mobile && mobileCollapsed
          ? <div className="menu-mask" onClick={clickChangeMobileCollapsed} />
          : ''
      }
    </>
  );
}

export default MenuComponent;
