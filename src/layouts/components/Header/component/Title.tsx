import SvgIcon from '@/icons/SvgIcon';
import { MenuOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

export default function Title() {
  const dispatch = useDispatch();
  const { mobile } = useSelector((state: any) => state.app);

  const clickChangeMobileCollapsed = () => {
    dispatch({ type: 'app/changeMobileCollapsed', payload: { collapsed: true } });
  };

  return (
    <div className="title">
      { mobile
        ? (
            <>
              <MenuOutlined onClick={clickChangeMobileCollapsed} className="mobile-menu" />
              <SvgIcon iconClass="flow" />
            </>
          )
        : (
            <>
              <SvgIcon iconClass="flow" />
              Bzsh Admin
            </>
          ) }
    </div>
  );
}
