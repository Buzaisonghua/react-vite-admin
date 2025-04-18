import type * as echarts from 'echarts';
import { useEcharts } from '@/hooks/useEcharts';

interface IProps {
  option: echarts.EChartsCoreOption
  data?: { [key in string]: any }
  width?: string
  height?: string
  className?: string
}

function EchartsComponent({ option, className, width = '100%', height = '100%' }: IProps) {
  const [echartsRef] = useEcharts(option);
  return (
    <div
      ref={echartsRef}
      className={`echarts ${className || ''}`}
      style={{ width, height }}
    />
  );
}

export default EchartsComponent;
