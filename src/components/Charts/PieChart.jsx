import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = () => {
  // Sample data for the pie chart
  const chartOptions = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Disposition Decision',
    },
    plotOptions: {
        pie: {
          dataLabels: {
            distance: -25,
            color: "white",
            format: " {point.percentage:.1f}%",
          },
          showInLegend: true,
        },
      },
      legend: {
        align: "right", // Set the alignment to the left
        verticalAlign: "middle", // Set the vertical alignment to the middle
        layout: "vertical",
        itemMarginTop: 5,
        itemMarginBottom: 5,
      },
    series: [
      {
        name: 'Categories',
        data: [
          { name: 'Category A', y: 30 },
          { name: 'Category B', y: 40 },
          { name: 'Category C', y: 20 },
          { name: 'Category D', y: 10 },
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

export default PieChart;
