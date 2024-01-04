import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/logo.webp';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm fs-5 mb-3">
      <div className="container justify-content-start">
        <button className="navbar-toggler border-0 p-2 me-2" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img src={logo} width="96" className="d-inline-block align-text-top" alt="Sims Music Archive Logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link fw-bolder px-4" to="/faqs">FAQs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bolder px-4" to="/releases">Releases</NavLink>
            </li>
            <li className="nav-item">
              <a href="https://docs.google.com/spreadsheets/d/1SicF1MsCvRM8Rwa8nuDLK4SunKjPBWB2Mw2wSgPfJ8I/view"
                target="_blank" rel="noreferrer" className="nav-link fw-bolder px-4">Music Database</a>
            </li>
            <li className="nav-item">
              <a href="https://discord.gg/r5DNAywy7m" target="_blank" rel="noreferrer"
                className="nav-link fw-bolder px-4">Discord</a>
            </li>
          </ul>
        </div>
    </div>
  </nav>
  );
};

export default Navbar;
