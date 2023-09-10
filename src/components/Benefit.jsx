import React from "react";
import BagShopping from "../assets/bag-shopping-solid.svg";
import FastShipping from "../assets/truck-fast-solid.svg";
import Discount from "../assets/money-bill-solid.svg";

const Benefit = () => {
  return (
    <div className="benefit-wrapper">
      <div className="box-benefit">
        <img src={BagShopping} alt="" />
        <h2>Stylish Collection.</h2>
        <p>
          Browse our wide range of stylish collections and find your perfect
          look.
        </p>
      </div>
      <div className="box-benefit">
        <img src={FastShipping} alt="" />
        <h2>Fast Shipping.</h2>
        <p>Enjoy fast and reliable shipping on all your fashion purchases.</p>
      </div>
      <div className="box-benefit">
        <img src={Discount} alt="" />
        <h2>Great Discounts.</h2>
        <p>Save big with our exciting discounts and exclusive offers.</p>
      </div>
    </div>
  );
};

export default Benefit;
