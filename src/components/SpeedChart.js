import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import ChartJS from '../chartConfig';

function SpeedChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const chartData = {
    labels: ['0s', '10s', '20s', '30s', '40s', '50s', '60s'],
    datasets: [
      {
        label: 'Speed (km/h)',
        data: data,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Vehicle Speed'
      }
    }
  };

  return <Line ref={chartRef} data={chartData} options={options} />;
}

export default SpeedChart;