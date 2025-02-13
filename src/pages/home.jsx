import React from "react";
import genesis from "../assets/genesis.svg";
import Navbar from '../components/navbar';
import Timer from '../components/timer';
import "./home.css";


const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="align">
        <div className="genesis">
          <img src={genesis} alt="" />
          <div className="register">
            <a href="https://unstop.com/hackathons/genesis-4-punes-largest-game-jam-army-institute-of-technology-ait-pune-1353705?lb=jy950xNp&utm_medium=Share&utm_source=shortUrl" target="_blank" rel="noopener noreferrer">
              <button>Register</button>
            </a>
            <h2>Final Round In</h2>
            <Timer />
          </div>
        </div>

      </div>
      {/* <div className="register">
        <button>Register</button>
        
        <h2>Final Round In</h2>
        <Timer />
      </div> */}



    </div>
  );
};

export default Home;