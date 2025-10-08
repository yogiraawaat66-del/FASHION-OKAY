import React from "react";
import FashionMeal from "../assets/fashion-meal.png";
import OutfitImage from "../assets/outfit-image.png";
import DeliveryTruck from "../assets/delivery-truck.png";

const Work = () => {
  const workInfoData = [
    {
      image: FashionMeal,
      title: "Your Outfit",
      text: "",
    },
    {
      image: OutfitImage,
      title: "Choose",
      text: "",
    },
    {
      image: DeliveryTruck,
      title: "Fastest Delivery",
      text: "",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Our work is inspired by your lifestyle – practical, stylish, and comfortable.   
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;