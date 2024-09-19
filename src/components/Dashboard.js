import React, { useState, useEffect } from 'react';
import SpeedChart from './SpeedChart';
import FuelChart from './FuelChart';
import EngineHealthChart from './EngineHealthChart';
import AlertSystem from './AlertSystem';
import ThreeDCarModel from './ThreeDCarModel';
import './Dashboard.css';

// Mock data generator functions
const generateSpeedData = () => Array(7).fill(0).map(() => Math.floor(Math.random() * 180));
const generateFuelData = () => Array(7).fill(0).map(() => Math.floor(Math.random() * 100));
const generateEngineHealthData = () => ({
  healthy: Math.floor(Math.random() * 70) + 30,
  warning: Math.floor(Math.random() * 20),
  critical: Math.floor(Math.random() * 10)
});
const generateAlerts = () => [
  { severity: 'low', message: 'Oil change needed soon' },
  { severity: 'medium', message: 'Tire pressure low' },
  { severity: 'high', message: 'Check engine light on' }
].filter(() => Math.random() > 0.5);

function Dashboard() {
  const [speedData, setSpeedData] = useState(generateSpeedData());
  const [fuelData, setFuelData] = useState(generateFuelData());
  const [engineHealthData, setEngineHealthData] = useState(generateEngineHealthData());
  const [alerts, setAlerts] = useState(generateAlerts());
  const [showCarModel, setShowCarModel] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeedData(generateSpeedData());
      setFuelData(generateFuelData());
      setEngineHealthData(generateEngineHealthData());
      setAlerts(generateAlerts());
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <h1>Car Performance Dashboard</h1>
      <div className="dashboard-grid">
        <div className="chart-container">
          <SpeedChart data={speedData} />
        </div>
        <div className="chart-container">
          <FuelChart data={fuelData} />
        </div>
        <div className="chart-container">
          <EngineHealthChart data={engineHealthData} />
        </div>
      </div>
      <div className="alerts-container">
        <AlertSystem alerts={alerts} />
      </div>
      <div className="controls">
        <button onClick={() => setShowCarModel(!showCarModel)}>
          {showCarModel ? 'Hide 3D Model' : 'Show 3D Model'}
        </button>
      </div>
      {showCarModel && (
        <div className="model-container">
          <ThreeDCarModel />
        </div>
      )}
    </div>
  );
}

export default Dashboard;