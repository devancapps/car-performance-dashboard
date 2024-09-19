import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function EngineHealthChart({ data }) {
  const chartData = {
    labels: ['Healthy', 'Warning', 'Critical'],
    datasets: [
      {
        data: [data.healthy, data.warning, data.critical],
        backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
        hoverBackgroundColor: ['#45a049', '#e6ae06', '#da190b'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="chart">
      <h2>Engine Health</h2>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}

export default EngineHealthChart;