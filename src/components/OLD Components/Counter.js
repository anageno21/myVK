import React, { useState, useEffect } from 'react';
import Odometer from 'react-odometerjs';

const Counter = ({ value, format = '(,ddd).dd' }) => {
  const [odometerValue, setOdometerValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOdometerValue(value);
    }, 500); // Καθυστέρηση για να φανεί το animation

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <Odometer
      value={odometerValue}
      format={format}
      theme="default"
    />
  );
};

export default Counter;