import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function EngineHealthChart({ data }) {
  const chartData = {
    labels: ['Healthy', 'Warning', 'Critical'],
    datasets: [{
      data: [data.healthy, data.warning, data.critical],
      backgroundColor: ['#4A9494', '#FFA500', '#FF4500'],
      borderColor: '#1E1E1E',
      borderWidth: 2
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'var(--cdk-light-teal)'
        }
      },
      title: {
        display: true,
        text: 'Engine Health',
        color: 'var(--cdk-light-teal)',
        font: {
          size: 16
        }
      },
      tooltip: {
        backgroundColor: 'rgba(30, 30, 30, 0.8)',
        titleColor: 'var(--cdk-light-teal)',
        bodyColor: 'var(--cdk-text)'
      }
    }
  };

  return <Doughnut data={chartData} options={options} />;
}

export default EngineHealthChart;