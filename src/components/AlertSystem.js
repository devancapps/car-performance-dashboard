import React from 'react';
import './AlertSystem.css';

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
              {alert.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AlertSystem;