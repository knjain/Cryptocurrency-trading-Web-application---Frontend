import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetTime = new Date();
  targetTime.setUTCHours(23, 0, 0, 0); // Set the target time to 10:30 PM UTC (12 AM UK time)
  // targetTime.setUTCHours(22, 30, 0, 0); // Set the target time to 10:30 PM UTC (12 AM UK time)

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetTime - now;
    if (difference > 0) {
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      return { hours, minutes, seconds };
    } else {
      return { hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className="countdown-timer text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-white flex flex-col  align-center justify-center text-2xl"
      style={{ alignItems: "center" }}
    >
      <h3>Time Left Until Launch</h3>
      <div className="timer text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
        <span>{timeLeft.hours}h </span>
        <span>{timeLeft.minutes}m </span>
        <span>{timeLeft.seconds}s </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
