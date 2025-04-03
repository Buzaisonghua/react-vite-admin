import { Outlet } from 'react-router-dom';
import Menu from './components/Menu';
import './index.less';

function Layout() {
  return (
    <div className="layout-container">
      <Menu />
      <div className="layout-content">
        <div><Outlet /></div>
      </div>
    </div>
  );
}

export default Layout;
