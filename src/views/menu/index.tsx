import { Outlet } from 'react-router-dom';
import './index.less';

export default function Menu() {
  return (
    <div className="menu">
      <h1>Menu</h1>
      <Outlet />
    </div>
  );
}
