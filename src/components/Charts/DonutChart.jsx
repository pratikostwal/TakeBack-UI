import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DonutChart = () => {
  const chartOptions = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Donut Chart without Inner Pie',
    },
    plotOptions: {
      pie: {
        innerSize: '40%', // Set the innerSize to create a hole in the center
      },
    },
    series: [
      {
        name: 'Data',
        data: [
          ['Category 1', 25],
          ['Category 2', 35],
          ['Category 3', 20],
          // Add more data as needed
        ],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default DonutChart;
