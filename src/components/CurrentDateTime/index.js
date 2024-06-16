import React, { useState, useEffect } from 'react';

const CurrentDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{currentDateTime.toLocaleDateString()} {currentDateTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default CurrentDateTime;
