import React, { useState, useEffect, useRef } from "react";
import "./timer.css";

function Timer() {
  const [timer, setTimer] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });
  const Ref = useRef(null);

  function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return { total, days, hours, minutes, seconds };
  }

  function startTimer(endTime) {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(endTime);
    if (total >= 0) {
      setTimer({
        days: days > 9 ? days : "0" + days,
        hours: hours > 9 ? hours : "0" + hours,
        minutes: minutes > 9 ? minutes : "0" + minutes,
        seconds: seconds > 9 ? seconds : "0" + seconds,
      });
    }
  }

  function clearTimer(endTime) {
    if (Ref.current) clearInterval(Ref.current);

    const id = setInterval(() => {
      startTimer(endTime);
    }, 1000);

    Ref.current = id;
  }

  function getDeadTime() {
    return new Date("March 8, 2025 00:00:00").toISOString();
  }

  useEffect(() => {
    clearTimer(getDeadTime());
    return () => clearInterval(Ref.current);
  }, []);

  return (
    <div className="timer">
      <div className="time-box">
        <span className="time-segment">{timer.days}D</span>
        
      </div>
      <span className="separator">:</span>
      <div className="time-box">
        <span className="time-segment">{timer.hours}H</span>
       
      </div>
      <span className="separator">:</span>
      <div className="time-box">
        <span className="time-segment">{timer.minutes}M</span>
        
      </div>
      <span className="separator">:</span>
      <div className="time-box">
        <span className="time-segment">{timer.seconds}S</span>
        
      </div>
    </div>
  );
}
export default Timer;