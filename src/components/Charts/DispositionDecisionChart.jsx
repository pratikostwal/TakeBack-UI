import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const YourChartComponent = () => {
  const chartDataRecycle = [
    { y: 2, name: 'FY20' },
    { y: 2, name: 'FY21' },
    { y: 2, name: 'FY22' },
    { y: 2, name: 'FY23' },
    { y: 2, name: 'FY24' },
  ];

  const chartDataRemarket = [
    { y: 4, name: 'FY20' },
    { y: 8, name: 'FY21' },
    { y: 9, name: 'FY22' },
    { y: 12, name: 'FY23' },
    { y: 12, name: 'FY24' },
  ];

  const options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Disposition Decision',
      align: 'left',
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      layout: 'horizontal',
      floating: true,
      shadow: false,
    },
    xAxis: {
      categories: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'],
    },
    yAxis: {
      title: {
        text: 'Weight (MT)',
      },
      labels: {
        formatter: function () {
          return this.value + 'MT';
        },
      },
    },
    series: [
      {
        name: 'Recycle',
        data: chartDataRecycle.map(point => point.y),
        color: '#6BC5FA', // Set the color as per your preference
      },
      {
        name: 'Remarket',
        data: chartDataRemarket.map(point => point.y),
        color: '#8CE68C', // Set the color as per your preference
      },
    ],
  };

  useEffect(() => {
    // You can add additional chart customization options here
  }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default YourChartComponent;
