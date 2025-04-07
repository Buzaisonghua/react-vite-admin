import { Button } from 'antd';
import { useSelector } from 'react-redux';

function Dashboard() {
  const user = useSelector((state: any) => state.user);
  return (
    <div>
      <div>
        dashboard
        {user.username}
      </div>
      <Button type="primary">Primary Button</Button>
    </div>
  );
}

export default Dashboard;
