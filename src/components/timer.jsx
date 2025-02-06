import React, { useState, useEffect, useRef } from "react";
import "./timer.css";

function Timer() {
  const [timer, setTimer] = useState("00:00:00:00");
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
      setTimer(
        (days > 9 ? days : "0" + days) +
          "d : " +
          (hours > 9 ? hours : "0" + hours) +
          "h : " +
          (minutes > 9 ? minutes : "0" + minutes) +
          "m : " +
          (seconds > 9 ? seconds : "0" + seconds) +
          "s"
      );
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
    return () => clearInterval(Ref.current); // Cleanup on unmount
  }, []);

  return (
    <div className="timer">
      <h3>{timer}</h3>
    </div>
  );
}

export default Timer;
