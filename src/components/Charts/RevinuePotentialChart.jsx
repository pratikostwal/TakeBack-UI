import React, { useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartComponent = () => {
  const chartOptions = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Remarketing Channel',
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
      min: 0,
      title: {
        text: 'Revinue in $',
      },
      labels: {
        formatter: function () {
            return  this.value / 1000 + 'k';
        },
      },
    },
    series: [
      {
        name: 'Extension',
        data: [8000, 7000, 5000, 3000, 2000],
        color:"#6BC5FA"
      },
      {
        name: 'Returned',
        data: [6000, 8000, 6000, 4000, 1000],
        color:"#8CE68C"
      },
    ],
  };

  const chartContainer = useRef(null);

  return (
    <div>
      <HighchartsReact style highcharts={Highcharts} options={chartOptions} ref={chartContainer} />
    </div>
  );
};

export default ChartComponent;
