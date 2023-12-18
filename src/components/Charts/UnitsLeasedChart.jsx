import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartComponent = () => {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Units Leased',
      align: 'left'
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      layout: 'horizontal',
      x: 0,
      y: 0,  // Adjust the y value to position the legend at the top
      floating: true,
      
        
      
      shadow: false
    },
    xAxis: {
      categories: ['FY 20', 'FY 21', 'FY 22', 'FY 23', 'FY 24']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Units Leased'
      },
      stackLabels: {
        enabled: true
      },
      labels: {
        format: '{value}MT'
      }
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}MT<br/>Total: {point.stackTotal}MT'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [
      {
        name: 'FMV',
        data: [3, 5, 1, 13, 16],
        color: '#8CE68C'
      },
      {
        name: '$ Out',
        data: [14, 8, 8, 12, 16],
        color: '#6BC5FA'
      }
    ]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChartComponent;
