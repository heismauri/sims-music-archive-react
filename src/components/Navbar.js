import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.webp';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm fs-5">
      <div className="container justify-content-start">
        <button className="navbar-toggler border-0 p-2 me-3" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
          <img src={logo} width="96" className="d-inline-block align-text-top" alt="Sims Music Archive Logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link fw-bolder px-4" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bolder px-4" to="/releases">Releases</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bolder px-4" to="/faqs">FAQs</NavLink>
            </li>
          </ul>
        </div>
    </div>
  </nav>
  );
};

export default Navbar;