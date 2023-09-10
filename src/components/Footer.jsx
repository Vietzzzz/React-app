import React from "react";
import Logo from "../assets/logo-swe_910a23eb7d84446d96937ca62f6d3751.webp";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="more-information">
        <ul className="column-information">
          <h3>COMPANY</h3>
          <li>
            <a href="">SHOP</a>
          </li>
          <li>
            <a href="">COLLECTIONS</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
        </ul>
        <ul className="column-information">
          <h3>SUPPORT</h3>
          <li>
            <a href="">EXCHANGES</a>
          </li>
          <li>
            <a href="">SHIPPING</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
        <ul className="column-information">
          <h3>INFORMATION</h3>
          <li>
            <a href="">PRIVACY POLICY</a>
          </li>
          <li>
            <a href="">TERM OF USE</a>
          </li>
        </ul>
        <ul className="column-information">
          <h3>FOLLOW US</h3>
          <li>
            <a href="">INSTAGRAM</a>
          </li>
          <li>
            <a href="">TIKTOK</a>
          </li>
        </ul>
      </div>
      <div>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
