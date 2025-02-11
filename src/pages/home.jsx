import React from "react";
import genesis from "../assets/genesis.svg";
import homebg from "../assets/homebg.svg";
import Navbar from '../components/navbar';
import Timer from '../components/timer';
import "./home.css";


const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      
      <div className="align">
        <div className="genesis">
           <img src={genesis} alt="" />
           <div className="register">
        <button>Register</button>
        
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