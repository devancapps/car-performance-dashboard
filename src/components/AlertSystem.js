import React from 'react';
import { FaOilCan, FaExclamationTriangle, FaCar } from 'react-icons/fa';
import './AlertSystem.css';

const alertIcons = {
  'oil': <FaOilCan />,
  'engine': <FaExclamationTriangle />,
  'general': <FaCar />
};

function AlertSystem({ alerts }) {
  return (
    <div className="alert-system">
      <h2>Alerts</h2>
      {alerts.length === 0 ? (
        <p>No active alerts</p>
      ) : (
        <ul>
          {alerts.map((alert, index) => (
            <li key={index} className={`alert alert-${alert.severity}`}>
              <span className="alert-icon">
                {alertIcons[alert.type] || alertIcons['general']}
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