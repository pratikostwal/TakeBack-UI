import React, { useEffect } from "react";
import Highcharts from "highcharts";

const ChartComponent = () => {
  useEffect(() => {
    const chart = Highcharts.chart("container", {
      chart: {
        type: "column",
      },
      title: {
        text: "Disposition Decision",
        align: "left",
      },
      legend: {
        align: "center", // Set the alignment to center
        verticalAlign: "bottom", // Move the legend to the bottom
        layout: "horizontal", // Display legend items horizontally
        itemStyle: {
          fontSize: "10px", // Set font size for legend items
        },
      },
      xAxis: {
        categories: ["2019", "2020", "2021"],
        labels: {
          x: -10,
        },
      },
      yAxis: {
        allowDecimals: false,
        title: {
          text: "Weight (MT)",
          style: {
            fontWeight: "bold", // Make the title text bold
          },
        },
        labels: {
          formatter: function () {
            return this.value + "k";
          },
        },
      },
      series: [
        {
          name: "Remarket",
          data: [38, 51, 34],
        },
        {
          name: "Reuse",
          data: [31, 26, 27],
        },
        {
          name: "Recycle",
          data: [38, 42, 41],
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                align: "center",
                verticalAlign: "bottom",
                layout: "horizontal",
              },
              yAxis: {
                labels: {
                  align: "left",
                  x: 0,
                  y: -5,
                },
                title: {
                  text: null,
                },
              },
              subtitle: {
                text: null,
              },
              credits: {
                enabled: false,
              },
            },
          },
        ],
      },
    });

    // Cleanup function (optional)
    return () => {
      chart.destroy(); // Destroy the chart when the component is unmounted
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return <div id="container"></div>;
};

export default ChartComponent;
