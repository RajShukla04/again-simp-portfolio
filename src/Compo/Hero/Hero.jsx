import React from "react";
import baby from "../../asset/baby.svg";
import Navbar from "../Navbar/Navbar";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <Navbar />
      <div className="whole_container">
    
        <div className="left">
          <h1>
            CREATIVE UI <br />
            <span>DESIGNER</span>
          </h1>
          <div className="btns">
            <a href="#Contact">
              <button className="btn1">Lets talk?</button>
            </a>
          </div>
        </div>
        <div className="right">
          <img src={baby} alt="homepic" />
        </div>
      </div>
  
    </div>
  );
};

export default Hero;
