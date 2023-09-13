import React from "react";
import Logo from "../assets/logo-swe_910a23eb7d84446d96937ca62f6d3751.webp";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section-one">
        <img src={Logo} alt="" />
      </div>
      <div className="footer-section-two">
        <div className="section-column">
          <h3>COMPANY</h3>
          <span>SHOP</span>
          <span>COLLETIONS</span>
          <span>ABOUT</span>
        </div>
        <div className="section-column">
          <h3>SUPPORT</h3>
          <span>RETURNS</span>
          <span>EXCHANGES</span>
          <span>SHIPPING</span>
          <span>CONTACT</span>
        </div>
        <div className="section-column">
          <h3>INFORMATION</h3>
          <span>PRIVACY POLICY</span>
          <span>TERMS OF USE</span>
        </div>
        <div className="section-column">
          <h3>FOLLOW US</h3>
          <span>INSTAGRAM</span>
          <span>TIKTOK</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
