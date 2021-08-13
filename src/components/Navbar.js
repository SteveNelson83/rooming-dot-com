import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = props => (
  <div className="navBar">
      <div className="title">
        <img className="snowboarder" src="images/Snowboarding-Man.png" height="50px" width="50px" alt="snowboarder" />
        <h1 id="sitename">SnowBooking</h1><span>.com</span>
      </div>
        <div className="nav">
          <Link to="/">
            <button className="btn">HOTELS</button>
          </Link>
          <Link to="/apartments">
            <button className="btn">APARTMENTS</button>
          </Link>
        </div>
  </div>
);

export default Navbar;