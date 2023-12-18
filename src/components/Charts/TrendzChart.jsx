// TrendChart.js
import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TrendChart = () => {
  const Data1 = [
    { y: 2, name: "FY20" },
    { y: 2, name: "FY21" },
    { y: 2, name: "FY22" },
    { y: 2, name: "FY23" },
    { y: 2, name: "FY24" },
  ];

  const Data2 = [
    { y: 4, name: "FY20" },
    { y: 4, name: "FY21" },
    { y: 4, name: "FY22" },
    { y: 4, name: "FY23" },
    { y: 4, name: "FY24" },
  ];

  const Data3 = [
    { y: 70, name: "FY20" },
    { y: 70, name: "FY21" },
    { y: 70, name: "FY22" },
    { y: 70, name: "FY23" },
    { y: 70, name: "FY24" },
  ];

  const Data4 = [
    { y: 5, name: "FY20" },
    { y: 5, name: "FY21" },
    { y: 5, name: "FY22" },
    { y: 5, name: "FY23" },
    { y: 5, name: "FY24" },
  ];

  const Data5 = [
    { y: 7, name: "FY20" },
    { y: 7, name: "FY21" },
    { y: 7, name: "FY22" },
    { y: 7, name: "FY23" },
    { y: 7, name: "FY24" },
  ];

  const Data6 = [
    { y: 8, name: "FY20" },
    { y: 8, name: "FY21" },
    { y: 8, name: "FY22" },
    { y: 8, name: "FY23" },
    { y: 8, name: "FY24" },
  ];
  const Data7 = [
    { y: 10, name: "FY20" },
    { y: 10, name: "FY21" },
    { y: 10, name: "FY22" },
    { y: 10, name: "FY23" },
    { y: 10, name: "FY24" },
  ];
  const Data8 = [
    { y: 11, name: "FY20" },
    { y: 11, name: "FY21" },
    { y: 11, name: "FY22" },
    { y: 11, name: "FY23" },
    { y: 11, name: "FY24" },
  ];
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Return Stream Contribution - YoY",
      align: "left",
    },
    legend: {
      align: "center",
      verticalAlign: "bottom",
      shadow: false,
      itemStyle: {
        fontSize: "10px", // Set font size for legend items
      },
    },
    xAxis: {
      categories: ["FY20", "FY21", "FY22", "FY23", "FY24"],
    },
    yAxis: {
      title: {
        text: "% Contribution To Goal",
        style: {
          fontWeight: "bold", // Make the title text bold
        },
      },
      labels: {
        formatter: function () {
          return this.value + "%";
        },
      },
    },
    series: [
      {
        name: "Producer Resposibility",
        data: Data1.map((point) => point.y),
        color: "#3B82F6", // Set the color as per your preference
      },
      {
        name: "DFS",
        data: Data2.map((point) => point.y),
        color: "#94FFEB", // Set the color as per your preference
      },
      {
        name: "Tech Refresh",
        data: Data3.map((point) => point.y),
        color: "#FAAC7B", // Set the color as per your preference
      },
      {
        name: "GSP",
        data: Data4.map((point) => point.y),
        color: "#8DC9BE", // Set the color as per your preference
      },
      {
        name: "ARB",
        data: Data5.map((point) => point.y),
        color: "#69FFE3", // Set the color as per your preference
      },
      {
        name: "ARS",
        data: Data6.map((point) => point.y),
        color: "#87CDF6", // Set the color as per your preference
      },
      {
        name: "Customer Trade in",
        data: Data7.map((point) => point.y),
        color: "#8CE68C", // Set the color as per your preference
      },
      {
        name: "Mail Back/Reconnect",
        data: Data8.map((point) => point.y),
        color: "#8CE68C", // Set the color as per your preference
      },
    ],
  };

  useEffect(() => {
    // You can add additional chart customization options here
  }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TrendChart;
