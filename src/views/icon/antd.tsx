import * as AntdIcons from '@ant-design/icons';
import Icons from './components/Icons';

function DynamicIcon(props: { iconClass: string }) {
  const { iconClass } = props;
  const IconComponent = (AntdIcons as any)[iconClass];
  if (IconComponent.render) {
    return IconComponent ? <IconComponent /> : <span>图标不存在</span>;
  }
  else {
    return <span>图标不存在</span>;
  }
}

function Antd() {
  const icons = Object.keys(AntdIcons);
  return (
    <Icons icons={icons} type="antd" IconComponent={DynamicIcon} />
  );
}

export default Antd;
