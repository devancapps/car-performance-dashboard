// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import SpeedChart from './SpeedChart';
import FuelChart from './FuelChart';
import EngineHealthChart from './EngineHealthChart';
import AlertSystem from './AlertSystem';
import ThreeDCarModel from './ThreeDCarModel';
import { generateDashboardData } from '../utils/dataGenerator';

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Simulating real-time data updates
    const interval = setInterval(() => {
      setDashboardData(generateDashboardData());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!dashboardData) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <div className="dashboard-row">
        <div className="dashboard-column">
          <SpeedChart data={dashboardData.speed} />
          <FuelChart data={dashboardData.fuel} />
        </div>
        <div className="dashboard-column">
          <ThreeDCarModel />
          <AlertSystem alerts={dashboardData.alerts} />
        </div>
        <div className="dashboard-column">
          <EngineHealthChart data={dashboardData.engineHealth} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;