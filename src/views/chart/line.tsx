import EchartsComponent from '@/views/components/echarts/EchartsComponent';

function LineChart() {
  const option: echarts.EChartsOption = {
    backgroundColor: '#fff',
    title: {
      top: 20,
      text: 'Requests',
      textStyle: {
        fontWeight: 'normal',
        fontSize: 16,
        color: '#F1F1F3',
      },
      left: '1%',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#57617B',
        },
      },
    },
    legend: {
      top: 20,
      icon: 'rect',
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      data: ['CMCC', 'CTCC', 'CUCC'],
      right: '4%',
      textStyle: {
        fontSize: 12,
        color: '#F1F1F3',
      },
    },
    grid: {
      top: 100,
      left: '2%',
      right: '2%',
      bottom: '2%',
      containLabel: true,
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: '#57617B',
        },
      },
      data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55'],
    }],
    yAxis: [{
      type: 'value',
      name: '(%)',
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#57617B',
        },
      },
      axisLabel: {
        margin: 10,
      },
      splitLine: {
        lineStyle: {
          color: '#57617B',
        },
      },
    }],
    series: [{
      name: 'CMCC',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
    }, {
      name: 'CTCC',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150],
    }, {
      name: 'CUCC',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122],
    }],
    animation: true, // 开启动画
    animationDuration: 2000, // 动画时长2秒
    animationEasing: 'cubicOut', // 缓动效果
  };
  return (
    <div className="chart-box">
      <EchartsComponent option={option} />
    </div>
  );
}

export default LineChart;
