import React from 'react';
import { FaExclamationTriangle, FaInfoCircle, FaExclamationCircle } from 'react-icons/fa';

const alertIcons = {
  low: <FaInfoCircle />,
  medium: <FaExclamationCircle />,
  high: <FaExclamationTriangle />
};

const alertStyles = {
  low: { backgroundColor: 'rgba(74, 148, 148, 0.2)', color: '#7FFFFF', borderColor: '#4A9494' },
  medium: { backgroundColor: 'rgba(255, 165, 0, 0.2)', color: '#FFA500', borderColor: '#FFA500' },
  high: { backgroundColor: 'rgba(255, 69, 0, 0.2)', color: '#FF4500', borderColor: '#FF4500' }
};

function AlertSystem({ alerts }) {
  return (
    <div className="alerts-container">
      <h2>Alerts</h2>
      {alerts.length === 0 ? (
        <p style={{color: 'var(--cdk-light-teal)'}}>No active alerts</p>
      ) : (
        <ul className="alert-list">
          {alerts.map((alert, index) => (
            <li 
              key={index} 
              className="alert"
              style={{
                ...alertStyles[alert.severity],
                border: `1px solid ${alertStyles[alert.severity].borderColor}`,
                borderRadius: '5px',
                padding: '10px',
                marginBottom: '10px'
              }}
            >
              <span className="alert-icon" style={{marginRight: '10px'}}>
                {alertIcons[alert.severity]}
              </span>
              <span className="alert-message">{alert.message}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AlertSystem;