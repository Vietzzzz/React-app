import React from "react";
import Logo from "../assets/logo-swe_910a23eb7d84446d96937ca62f6d3751.webp";
import PageShop from "../pages/Shop";

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BiSolidShoppingBag } from "react-icons/bi";
import { FaBloggerB } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import Shop from "../pages/Shop";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-container">
        <a href="">
          <img src={Logo} alt="" />
        </a>
        <div>
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <BiSolidShoppingBag />
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <FaBloggerB />
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <IoMdContact />
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
