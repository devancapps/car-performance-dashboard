import React, { useState, useEffect } from 'react';
import Header from './Header';
import SpeedChart from './SpeedChart';
import FuelChart from './FuelChart';
import EngineHealthChart from './EngineHealthChart';
import AlertSystem from './AlertSystem';
import ThreeDCarModel from './ThreeDCarModel';
import SpeedIndicator from './SpeedIndicator';
import FuelGauge from './FuelGauge';
import DateRangeSelector from './DateRangeSelector';
import { generateMockData } from '../utils/mockDataGenerator';
import './Dashboard.css';

function Dashboard() {
  const [carData, setCarData] = useState({
    currentSpeed: 0,
    currentFuel: 0,
    speedHistory: [],
    fuelHistory: [],
    engineHealth: { healthy: 70, warning: 20, critical: 10 },
    alerts: []
  });
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });

  useEffect(() => {
    const updateData = () => {
      const newData = generateMockData();
      setCarData(prevData => ({
        ...prevData,
        currentSpeed: newData.currentSpeed,
        currentFuel: newData.currentFuel,
        speedHistory: [...prevData.speedHistory.slice(-6), newData.currentSpeed],
        fuelHistory: [...prevData.fuelHistory.slice(-6), newData.currentFuel],
        engineHealth: newData.engineHealth,
        alerts: newData.alerts
      }));
    };

    updateData(); // Initial update
    const interval = setInterval(updateData, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDateRangeChange = (range) => {
    setDateRange(range);
    // Here you would typically fetch historical data based on the range
    console.log('Fetching data for range:', range);
  };

  return (
    <div className="dashboard">
      <Header carModel="Tesla Model S" />
      <div className="dashboard-grid">
        <div className="speed-section">
          <SpeedIndicator speed={carData.currentSpeed} />
          <SpeedChart data={carData.speedHistory} dateRange={dateRange} />
        </div>
        <div className="fuel-section">
          <FuelGauge fuelLevel={carData.currentFuel} />
          <FuelChart data={carData.fuelHistory} dateRange={dateRange} />
        </div>
        <div className="engine-health-section">
          <EngineHealthChart data={carData.engineHealth} />
        </div>
        <div className="alerts-section">
          <AlertSystem alerts={carData.alerts} />
        </div>
        <div className="model-section">
          <ThreeDCarModel 
            alerts={carData.alerts}
            performance={{
              speed: carData.currentSpeed,
              fuel: carData.currentFuel,
              engineHealth: carData.engineHealth
            }}
          />
        </div>
      </div>
      <DateRangeSelector onRangeChange={handleDateRangeChange} />
    </div>
  );
}

export default Dashboard;