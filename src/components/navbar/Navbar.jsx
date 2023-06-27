import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand navbar-homename">
          EXE SCISSORS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-3 navbar-login">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item ml-3 navbar-signup">
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </li>
            {isLoggedIn && (
              <li className="nav-item ml-3 navbar-signout">
                <Link to="/signout" className="nav-link">
                  Sign out
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
