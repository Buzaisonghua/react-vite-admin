import SvgIcon from '@/icons/SvgIcon';
import Icons from './components/Icons';

const re = /\/([^/]+)\.svg$/;
const icons = Object.keys(import.meta.glob('@/icons/svg/*')).map((val) => {
  const names = re.exec(val) as string[];
  return names[1];
});

function Custom() {
  return (
    <Icons icons={icons} IconComponent={SvgIcon} />
  );
}

export default Custom;
