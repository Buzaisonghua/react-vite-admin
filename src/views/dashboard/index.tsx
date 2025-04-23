import SvgIcon from '@/icons/SvgIcon';
import { useSelector } from 'react-redux';

function Dashboard() {
  const { mobile, collapsed } = useSelector((state: any) => state.app);
  return (
    <div>
      <div>
        {mobile ? '移动端' : 'PC端'}
        {collapsed ? '收起' : '展开'}
        <SvgIcon iconClass="wind-cry" />
      </div>
    </div>
  );
}

export default Dashboard;
