import type { MenuProps } from 'antd';
import { removeToken } from '@/utils/token';
import { GithubOutlined, SketchOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Avatar() {
  const user = useSelector((state: any) => state.user);
  const { avatar, userName } = user;
  const navigate = useNavigate();

  /** logout */
  const clickLogout = () => {
    removeToken();
    navigate('/');
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'BZSH ADMIN',
      disabled: true,
    },
    {
      key: 'github',
      icon: <GithubOutlined />,
      label: (
        <a href="https://github.com/Buzaisonghua/react-vite-admin" target="_blank">
          github
        </a>
      ),
    },
    {
      key: 'logout',
      label: (
        <span onClick={clickLogout}>
          退出登录
        </span>
      ),
      icon: <SketchOutlined />,
    },
  ];
  return (
    <Dropdown
      menu={{ items }}
    >
      <div className="avatar-box">
        <img
          className="avatar-image"
          src={avatar}
        />
        <span className="username">{ userName }</span>
      </div>
    </Dropdown>
  );
}
