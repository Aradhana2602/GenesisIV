import React, { useEffect } from 'react';
import Prizebg from "../assets/prizebg.svg";
import Gdxr from "../assets/gdxr.svg";
import Zombie from "../assets/zombie.svg";
import './prize.css';

const prizeData = [
  { rank: "01", suffix: "st", amount: "₹17.5k" },
  { rank: "02", suffix: "nd", amount: "₹15k" },
  { rank: "03", suffix: "rd", amount: "₹12.5k" }
];

const Prize = () => {
  useEffect(() => {
    const numDots = 30; // Number of floating dots
    const container = document.querySelector('.zombie-container');

    for (let i = 0; i < numDots; i++) {
      let dot = document.createElement('div');
      dot.className = 'floating-dot';

      // Randomize position around zombie
      dot.style.left = `${40 + Math.random() * 20}%`; // Constrain to zombie area
      dot.style.top = `${50 + Math.random() * 20}%`;
      dot.style.animationDuration = `${2 + Math.random() * 3}s`; // Random speed
      dot.style.width = dot.style.height = `${5 + Math.random() * 10}px`; // Random size

      container.appendChild(dot);
    }
  }, []);

  return (
    <div className="prize">
      <div className="prize-container">
        {prizeData.map((prize, index) => (
          <div className="pool" key={index}>
            <h1>{prize.rank}</h1>
            <div className="lower">
              <span><b>{prize.suffix}</b></span>
              <span><b>Prize</b></span>
            </div>
            <h1>{prize.amount}</h1>
          </div>
        ))}
      </div>

      <img src={Gdxr} alt="Gdxr" className="gdxr" />
      <div className="prize-1">
        <img src={Prizebg} alt="Prize Bg" />
      </div>

      {/* Zombie with Floating Dots */}
      <div className="zombie-container">
        <img src={Zombie} alt="Zombie" className="zombie" />
      </div>
    </div>
  );
};

export default Prize;
