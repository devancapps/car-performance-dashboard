import React from 'react';
import { FaTachometerAlt } from 'react-icons/fa';


function SpeedIndicator({ speed }) {
  return (
    <div className="speed-indicator">
      <FaTachometerAlt className="speed-icon" />
      <div className="speed-value">{Math.round(speed)}</div>
      <div className="speed-unit">km/h</div>
    </div>
  );
}

export default SpeedIndicator;