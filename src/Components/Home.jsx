import React from "react";
import video5bg from "../assets/video5-bg.mp4";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar /> 
      <div className="home-video">
        <video src={video5bg} autoPlay muted loop></video>
      </div>
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Designed with Love, Worn with Confidence. 
          </h1>
          <p className="primary-text">
            Discover fashion that defines you – stylish, comfortable, and timeless. Explore our latest collections of trendy wear, crafted with quality and elegance to make every moment unforgettable. Shop your look today!
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;