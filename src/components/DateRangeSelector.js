import React, { useState } from 'react';


function DateRangeSelector({ onRangeChange }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRangeChange({ startDate, endDate });
  };

  return (
    <form className="date-range-selector" onSubmit={handleSubmit}>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
      <button type="submit">View Historical Data</button>
    </form>
  );
}

export default DateRangeSelector;