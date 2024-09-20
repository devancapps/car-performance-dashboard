import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './ChartStyles.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function EngineHealthChart({ data }) {
  const chartData = {
    labels: ['Healthy', 'Warning', 'Critical'],
    datasets: [{
      data: [data.healthy, data.warning, data.critical],
      backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
      hoverBackgroundColor: ['#45a049', '#e6ae06', '#da190b'],
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Engine Health',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += Math.round(context.parsed) + '%';
            }
            return label;
          }
        }
      }
    }
  };

  return <Doughnut data={chartData} options={options} />;
}

export default EngineHealthChart;