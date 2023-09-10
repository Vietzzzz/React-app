import React from "react";
import ImgBg from "../assets/photo-1547451875-f1adc0842d50.jpg";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="image-background">
        <img src={ImgBg} alt="" />
        <div className="text-overlay">Discover The Latest Fashion Trend</div>
        <div className="button-overlay">
          <button className="button-background">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
