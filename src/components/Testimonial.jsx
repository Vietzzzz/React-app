import React from "react";
import JohnDoe from "../assets/JohnDoe.png";
import Marsh from "../assets/channels4_profile.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div>
      <div className="testimonials-top">
        <h1 className="heading">What Are They Saying ?</h1>
        <p className="subheading">
          We are proud that our products have reached the hands of famous actors
          and singers worldwide
        </p>
      </div>
      <div className="testimonials-bottom">
        <div className="comment">
          <img src={JohnDoe} alt="" />
          <p className="primary-text">
            "The intricate computer-aided designs and minimalistic patterns make
            it stand out, and wearing it gives a unique sensation. I can't wait
            for their next collection, it's truly amazing."
          </p>
          <div className="star-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>John Doe</h2>
        </div>
        <div className="comment">
          <img src={Marsh} alt="" />
          <p className="primary-text">
            "When you touch the fabric, you won't believe it - an indescribable,
            comfortable sensation. Their manufacturing technology is truly
            amazing, incredibly fast and precise according to what I want."
          </p>
          <div className="star-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Peter Johnson</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
