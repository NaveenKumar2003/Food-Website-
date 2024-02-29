

import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
  
        <img src="public/foody.png" alt="Foody Logo" />
        
      </div>
      <h1>  Welcome to Our Foody Restaurant</h1>

      <div className="nav-items">
        <span><Link to="/">Home</Link></span>
        <span><Link to="/menu">Menu</Link></span>
        <span><Link to="/about">About</Link></span>
        <span><Link to="/contact">Contact</Link></span>
        <span><Link to="/contact">Order</Link></span>
        <span><Link to="/contact">Login</Link></span>
      </div>
    </div>
  );
};

export default Header;



