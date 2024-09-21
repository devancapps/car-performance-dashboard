import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function SpeedChart({ data }) {
  const chartData = {
    labels: data.map(d => d.time.toLocaleTimeString()),
    datasets: [{
      label: 'Speed (km/h)',
      data: data.map(d => d.value),
      borderColor: '#7FFFFF',
      backgroundColor: 'rgba(127, 255, 255, 0.2)',
      fill: true,
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#7FFFFF'
        }
      },
      title: {
        display: true,
        text: 'Vehicle Speed',
        color: '#7FFFFF',
        font: {
          size: 16
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(30, 30, 30, 0.8)',
        titleColor: '#7FFFFF',
        bodyColor: '#FFFFFF'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#7FFFFF'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#7FFFFF'
        }
      }
    }
  };

  return <Line data={chartData} options={options} />;
}

export default SpeedChart;