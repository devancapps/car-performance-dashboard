import React, { useState, useEffect } from 'react';


function Header({ carModel }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="dashboard-header">
      <h1>{carModel}</h1>
      <div className="current-time">
        {currentTime.toLocaleString()}
      </div>
    </header>
  );
}

export default Header;