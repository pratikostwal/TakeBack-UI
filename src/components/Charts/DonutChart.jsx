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
      align: "left", // Align the title text to the right
    },
    plotOptions: {
      pie: {
        innerSize: "50%", // Set the innerSize to create a hole in the center
        dataLabels: {
          distance: -20,
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
        name: "Data",
        data: [
          ["ARS", 25],
          ["Customer Trade in", 35],
          ["Mail Back/Reconnect", 20],
          ["Producer Responsibility", 10],
          ["DFS", 30],
          ["Tech Refresh", 34],
          ["GSP", 23],
          ["ARB", 57],

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
