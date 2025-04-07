import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Menu from './components/Menu';
import './index.less';

function Layout() {
  const dispatch = useDispatch();
  const clickChangeCollapsed = () => {
    dispatch({ type: 'collapsed/changeCollapsed' });
  };
  return (
    <div className="layout-container">
      <Menu />
      <div className="layout-content">
        <div className="tets" onClick={clickChangeCollapsed}>点击</div>
        <div><Outlet /></div>
      </div>
    </div>
  );
}

export default Layout;
