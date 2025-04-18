import * as echarts from 'echarts';
import { debounce } from 'lodash-es';
import { useEffect, useLayoutEffect, useRef } from 'react';
/**
 * @description 使用Echarts(只是为了添加图表响应式)
 * @param {Element} data 数据 目前只针对于次Hooks-admin里一些data都是写死在options 所以data为可选 根据项目自行修改即可
 * @param {object} options 绘制Echarts的参数(必传)
 * @return chart
 */
export function useEcharts(options: echarts.EChartsCoreOption) {
  const myChart = useRef<echarts.EChartsType>();
  const echartsRef = useRef<HTMLDivElement>(null);
  // const { collapsed } = useSelector((state: any) => state.collapsed);

  // echarts resize
  const echartsResize = debounce(() => {
    echartsRef && myChart?.current?.resize({ animation: { duration: 500, easing: 'cubicOut' } });
  }, 100);

  // 初始化echarts
  useLayoutEffect(() => {
    myChart.current = echarts.init(echartsRef.current as HTMLDivElement);
  });

  // const dataSignature = useMemo(() => cloneDeep(options), [options]);
  // useEffect(() => {
  //   console.log('???????????????????????????');
  //   if (data?.length !== 0) {
  //     myChart?.current?.setOption(options);
  //   }
  // }, [data, dataSignature]);

  useEffect(() => {
    myChart?.current?.setOption(options);
    window.addEventListener('resize', echartsResize, false);
    echartsResize();
    return () => {
      window.removeEventListener('resize', echartsResize);
      myChart?.current?.dispose();
    };
  }, []);

  return [echartsRef];
}
