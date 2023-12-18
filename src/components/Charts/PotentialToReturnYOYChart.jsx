import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsTimeline from 'highcharts/modules/timeline'; // Import the timeline module

// Initialize the timeline module
highchartsTimeline(Highcharts);

const TimelineChart = () => {
  const options = {
    chart: {
      type: 'timeline', // Use 'timeline' type for timeline charts
    },
    title: {
      text: 'Timeline Chart',
    },
    xAxis: {
      categories: ['EOL-FY25', 'EOL-FY26', 'EOL-FY27', 'EOL-FY28', 'EOL-FY29', 'ECL-FY29', 'EOL-FY30', 'EOL-FY31'],
    },
    yAxis: {
      title: {
        text: 'Value',
      },
    },
    series: [
      {
        name: 'FY20',
        data: [null, 311779, 86605, null, null, null, null, null],
        color: '#4285f4',
      },
      {
        name: 'FY21',
        data: [null, null, 346421, 96228, 38491, null, null, null],
        color: '#db3f27',
      },
      {
        name: 'FY22',
        data: [null, null, null, 384912, 106920, 42768, null, null],
        color: '#93a4a2',
      },
      {
        name: 'FY23',
        data: [null, null, null, null, 427680, 118800, 47520, null],
        color: '#80b9f7',
      },
      {
        name: 'FY24',
        data: [null, null, null, null, null, 475200, 132000, 52800],
        color: '#4285f4',
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TimelineChart;



