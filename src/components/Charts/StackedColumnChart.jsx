import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const StackedColumnChart = () => {
  // Sample data for the chart
  const chartData = {
    chart: {
      type: "column",
    },
    title: {
      text: "Product - Contribution",
    },
    xAxis: {
        min: 0,
        title: {
          text: "Product Family",
        },
      categories: ["Category 1", "Category 2", "Category 3", "Category 4"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "% Contribution To Goal",
      },
    },
    tooltip: {
      headerFormat: "<b>{point.x}</b><br/>",
      pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
          color:
            (Highcharts.theme && Highcharts.theme.dataLabelsColor) || "white",
        },
      },
    },
    legend: {
      enabled: false, // Set to false to hide the legend
    },
    series: [
      {
        name: "Data 1",
        data: [5, 3, 4, 7],
      },
      {
        name: "Data 2",
        data: [2, 2, 3, 2],
      },
      {
        name: "Data 3",
        data: [3, 4, 4, 2],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartData} />
    </div>
  );
};

export default StackedColumnChart;
