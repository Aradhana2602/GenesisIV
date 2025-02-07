import React from 'react'
import "./sponsors.css";
import Frame from "../assets/Frame.svg";

const sponsors = () => {
  return (
    <div>
      <div className="sponsors">
        <h1>OUR SPONSORS</h1>

        <div className="sections">
            <h2>Title Sponsor</h2>
                <img src={Frame} alt="" />
            <h2 classname="space">Gold Sponsor</h2>
                <img src={Frame} alt="" />
                <img src={Frame} alt="" />
            <h2>Bronze Sponsor</h2>
                <img src={Frame} alt="" />
        </div>
      </div>
    </div>
  )
}

export default sponsors
