import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Fashion That Cares for You & the Planet.  
        </h1>
        <p className="primary-text">
            
        </p>
        <p className="primary-text">
          We believe fashion is more than just clothing – it’s self-expression. Our mission is to create timeless pieces that bring comfort, confidence, and style to your everyday life.    
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;