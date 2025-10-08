import React from "react";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <p>
          I was looking for versatile outfits I could wear to both work and casual outings. This brand nailed it! The designs are minimal yet super stylish.       
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Harsh Vardhan</h2>
      </div>
    </div>
  );
};

export default Testimonial;