import RightComponent from './component/RightComponent';
import Title from './component/Title';
import './index.less';

function Header() {
  return (
    <>
      <header className="layout-header" />
      <div className="header-main">
        <Title />
        <RightComponent />
      </div>
    </>
  );
}

export default Header;
