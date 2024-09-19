import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

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
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Engine Health',
      },
    },
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}

export default EngineHealthChart;