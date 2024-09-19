import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function FuelChart({ data }) {
  const chartData = {
    labels: ['60s ago', '50s ago', '40s ago', '30s ago', '20s ago', '10s ago', 'Now'],
    datasets: [
      {
        label: 'Fuel Level',
        data: data,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Fuel Level (%)'
        }
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Fuel Level Over Time'
      }
    }
  };

  return <Line data={chartData} options={options} />;
}

export default FuelChart;