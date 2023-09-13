import React from "react";
import Logo from "../assets/logo-swe_910a23eb7d84446d96937ca62f6d3751.webp";
import { FaBars } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BiSolidShoppingBag } from "react-icons/bi";
import { FaBloggerB } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <a href="">
        <img src={Logo} alt="" />
      </a>
      <div>
        <ul className="navbar">
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
      <label for="nav-mobile-input" className="navbar-button">
        <FaBars />
      </label>
      <input
        type="checkbox"
        hidden
        name=""
        className="nav__input"
        id="nav-mobile-input"
      />
      <label for="nav-mobile-input" className="navbar-overlay"></label>
      <div className="navbar-mobile">
        <ul>
          <li>
            <AiFillHome />
            <a href="">Home</a>
          </li>
          <li>
            <BiSolidShoppingBag />
            <a href="">Shop</a>
          </li>
          <li>
            <FaBloggerB />
            <a href="">Blog</a>
          </li>
          <li>
            <IoMdContact />
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
