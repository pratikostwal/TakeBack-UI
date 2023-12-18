import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DonutChart = () => {
  const chartOptions = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Return Stream - Contribution",
    },
    plotOptions: {
      pie: {
        innerSize: "60%", // Set the innerSize to create a hole in the center
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
        name: "Data",
        data: [
          ["Category 1", 25],
          ["Category 2", 35],
          ["Category 3", 20],
          ["Category 4", 10],
          ["Category 5", 30],
          ["Category 6", 34],
          ["Category 7", 23],
          ["Category 8", 57],
          ["Category 9", 43],
          ["Category 10", 12],
          ["Category 11", 45],

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
