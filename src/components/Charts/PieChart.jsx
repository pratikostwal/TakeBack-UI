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
      align: 'left',
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
        itemStyle: {
          fontSize: "10px", // Set font size for legend items
        },
      },
    series: [
      {
        name: 'Categories',
        data: [
          { name: 'Remarket', y: 30 },
          { name: 'Reuse', y: 15 },
          { name: 'Recycle', y: 5 },
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
