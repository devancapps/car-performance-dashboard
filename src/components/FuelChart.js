import React from 'react';
import { Line } from 'react-chartjs-2';

function FuelChart({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Fuel Level',
        data: data.values,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="chart">
      <h2>Fuel Level</h2>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default FuelChart;
