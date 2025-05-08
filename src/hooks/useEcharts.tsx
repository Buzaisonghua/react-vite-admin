import * as echarts from 'echarts';
import { throttle } from 'lodash-es';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
/**
 * @description 使用Echarts(只是为了添加图表响应式)
 * @param {object} options 绘制Echarts的参数(必传)
 * @return chart
 */
export function useEcharts(options: echarts.EChartsCoreOption) {
  const myChart = useRef<echarts.EChartsType>();
  const echartsRef = useRef<HTMLDivElement>(null);
  const { collapsed = false, mobile = false } = useSelector((state: any) => state.app);

  // echarts resize
  const echartsResize = throttle(() => {
    echartsRef && myChart?.current?.resize({ animation: { duration: 500, easing: 'cubicOut' } });
  }, 500);

  // 初始化echarts
  useLayoutEffect(() => {
    myChart.current = echarts.init(echartsRef.current as HTMLDivElement);
  });

  useEffect(() => {
    echartsResize();
  }, [collapsed, echartsResize, mobile]);

  useEffect(() => {
    myChart?.current?.setOption(options);
    window.addEventListener('resize', echartsResize, false);
    // echartsResize();
    return () => {
      window.removeEventListener('resize', echartsResize);
      myChart?.current?.dispose();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [echartsRef];
}
