import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
