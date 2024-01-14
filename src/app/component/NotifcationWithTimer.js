import React, { useState, useEffect } from 'react';

const NotificationWithTimer = ({ message }) => {
  const [startTime, setStartTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setStartTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const calculateElapsedTime = (start, end) => {
    const elapsedMilliseconds = end - start;
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

    if (elapsedSeconds < 60) {
      return `${elapsedSeconds} seconds ago`;
    } else if (elapsedSeconds < 3600) {
      const minutes = Math.floor(elapsedSeconds / 60);
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else {
      const hours = Math.floor(elapsedSeconds / 3600);
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    }
  };

  const elapsedTimeString = calculateElapsedTime(startTime, new Date());

  return (
    <div className="notification">
      <p>{message}</p>
      <p> {elapsedTimeString}</p>
    </div>
  );
};

export default NotificationWithTimer;
