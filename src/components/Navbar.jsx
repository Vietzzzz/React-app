import React, { Component } from "react";
import Logo from "../assets/logo-swe_910a23eb7d84446d96937ca62f6d3751.webp";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-container">
        <a href="">
          <img src={Logo} alt="" />
        </a>
        <div>
          <ul id="navbar">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
