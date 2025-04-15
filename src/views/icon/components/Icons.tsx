import { copy } from '@/utils';
import './icons.less';

function Custom(props: { icons: string[], type?: string, IconComponent: (props: any) => JSX.Element }) {
  const { icons, IconComponent, type } = props;
  const clickIconItem = (icon: string) => {
    copy(`${type === 'antd' ? `<${icon} />` : `<SvgIcon iconClass="${icon}" />`}`);
  };
  return (
    <div className="custom-icon">
      {
        icons.map(icon => (
          <div className="custom-icon-item" key={icon} onClick={() => clickIconItem(icon)}>
            <div className="icon-name">{icon}</div>
            <div className="icon-box">
              <IconComponent iconClass={icon} />
            </div>
          </div>
        ))
      }

    </div>
  );
}

export default Custom;
