import React from "react";
import genesis from "../assets/genesis.svg";
import IV from "../assets/iv.svg";
import Navbar from '../components/navbar';
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <div className="genesis">
        <img src={genesis} alt="" />
        <img src={IV} alt="" />

      </div>
      
    </div>
  );
};

export default Home;
