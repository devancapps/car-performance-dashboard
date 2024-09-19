import React from 'react';

function AlertSystem({ alerts }) {
  return (
    <div className="alert-system">
      <h2>Alerts</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index} className={`alert alert-${alert.severity}`}>
            {alert.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlertSystem;