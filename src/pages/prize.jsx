import React from 'react';
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
      
      {/* New Zombie Image */}
      <img src={Zombie} alt="Zombie" className="zombie" />
    </div>
  );
}

export default Prize;
