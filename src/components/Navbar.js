import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink className="navbar-item" to="/">Home</NavLink>
      <NavLink className="navbar-item" to="/releases">Releases</NavLink>
      <NavLink className="navbar-item" to="/faqs">FAQs</NavLink>
    </nav>
  );
};

export default Navbar;
