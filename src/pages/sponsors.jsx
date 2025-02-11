import React from 'react';
import "./sponsors.css";
import Frame from "../assets/Frame.svg";
import Ramu from "../assets/ramu.svg";
import Wheel from "../assets/wheel.svg"; // Add the wheel image

const Sponsors = () => {
  return (
    <div className='og'>
      <div className="sponsors">
        <h1>OUR SPONSORS</h1>

        <div className="sections">
          <h2>Title Sponsor</h2>
          <img src={Frame} alt="" />
          <h2 className="space">Gold Sponsor</h2>
          <img src={Frame} alt="" />
          <img src={Frame} alt="" />
          <h2>Bronze Sponsor</h2>
          <img src={Frame} alt="" />
        </div>
      </div>

      {/* OG Section with Ramu and Rotating Wheel */}
      <div className="OG-section">
        <div className="ramu-container">
          <img src={Wheel} alt="Wheel" className="rotating-wheel" />
          <img src={Ramu} alt="Ramu" className="ramu-image" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
