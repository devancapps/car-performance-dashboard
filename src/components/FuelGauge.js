import React from 'react';
import { FaGasPump } from 'react-icons/fa';

function FuelGauge({ fuelLevel }) {
  return (
    <div className="fuel-gauge">
      <FaGasPump className="fuel-icon" />
      <div className="fuel-bar">
        <div 
          className="fuel-level" 
          style={{ height: `${fuelLevel}%` }}
        ></div>
      </div>
      <div className="fuel-percentage">{Math.round(fuelLevel)}%</div>
    </div>
  );
}

export default FuelGauge;