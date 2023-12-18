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
      align: "left", // Align the title text to the right
    },
    xAxis: {
      min: 0,
      title: {
        text: "Product Family",
        style: {
          fontWeight: "bold", // Make the title text bold
        },
      },
      categories: ["Laptop", "Desktop", "Servers", "Storage", "Others"],
    },
    yAxis: {
      min: 0,
      max: 40,
      title: {
        text: "% Contribution To Goal",
        style: {
          fontWeight: "bold", // Make the title text bold
        },
      },

      labels: {
        format: "{value}%", // Add the percentage sign to yAxis labels
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
          enabled: false,
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
        // name: "Data ",
        data: [10, 10, 4, 6, 3],
      },
      {
        // name: "Data ",
        data: [7, 7, 3, 5, 5],
      },
      {
        // name: "Data ",
        data: [6, 5, 4, 6, 2],
      },
      {
        // name: "Data ",
        data: [4, 2, 4, 4, 1],
      },
      {
        // name: "Data ",
        data: [2, 1, 4, 2, 2],
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
