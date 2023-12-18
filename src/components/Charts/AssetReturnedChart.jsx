import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';

const Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Highcharts.Chart({
        chart: {
          renderTo: chartRef.current,
          type: 'column',
        },
        title: {
          text: 'Assets Returned',
        },
        xAxis: {
          categories: ['FY 20', 'FY 21', 'FY 22', 'FY 23', 'FY 24'],
          title: {
            text: 'Year',
          },
        },
        yAxis: {
          title: {
            text: 'Weight Returned (MT)',
          },
        },
        plotOptions: {
          column: {
            stacking: 'normal',
          },
        },
        series: [
          {
            name: 'Desktop',
            data: [10000, 8000, 6000, 4000, 2000],
            color: '#8CE68C',
          },
          {
            name: 'Monitor',
            data: [5000, 4000, 3000, 2000, 1000],
            color: '#6BC5FA',
          },
          {
            name: 'Notebook',
            data: [3000, 2500, 2000, 1500, 1000],
            color: '#EFC55A',
          },
          {
            name: 'Server',
            data: [2000, 1500, 1000, 500, 0],
            color: '#5AEFCB',
          },
          {
            name: 'Workstation',
            data: [1500, 1000, 500, 0, 0],
            color: '#D7ED9A',
          },
          {
            name: 'Others',
            data: [1000, 500, 0, 0, 0],
            color: '#F98773',
          },
        ],
      });

      return () => chart.destroy();
    }
  }, []);

  return (
    <div>
      <div ref={chartRef} />
    </div>
  );
};

export default Chart;
