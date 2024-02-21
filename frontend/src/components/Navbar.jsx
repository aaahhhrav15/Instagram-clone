import React from 'react';
import logo from "../assets/logo.png";
import "../styles/navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="option">
        <Link to="/signup">
          <li>Sign Up</li>
        </Link>
        <Link to="/signin">
          <li>Sign In</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;