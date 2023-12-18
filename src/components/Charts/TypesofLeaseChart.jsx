import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const NestedDonutChart = () => {
  useEffect(() => {
    // Create the nested donut chart configuration
    const options = {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Type Of Lease (FY24 YTD)',
        align:"left"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
        },
      },
      series: [
        {
          name: 'Outer Donut',
          data: [
            {
              name: 'FMV',
              y: 25, // Sum of the outer donut values
              color: '#8CE68C',
            },
            {
              name: '$ Out',
              y: 20,
              color: '#6BC5FA',
            },
          ],
          size: '80%', // Outer donut size
          innerSize: '60%', // Inner donut size
        },
        {
          name: 'Inner Donut',
          data: [
            {
              name: 'Return Potential',
              y: 10,
              color: '#94ECCB',
            },
            {
              name: 'Sold / Give In Place',
              y: 15,
              color: '#1DDD8D',
            },
            {
              name: 'Customer Purchase',
              y: 20,
              color: '#E8E6E6',
            },
          ],
          size: '60%', // Outer donut size
          innerSize: '65%', // Inner donut size
        },
      ],
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0,
      },
    };

    // Render the chart
    Highcharts.chart('nested-donut-chart-container', options);
  }, []);

  return <div id="nested-donut-chart-container" style={{ width: '100%', height: '400px' }} />;
};

export default NestedDonutChart;
