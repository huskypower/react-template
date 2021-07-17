import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-light">
        <ul className="navbar-nav">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/counter">
              Counter
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/creditcard">
              Credit Card
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/users">
              Github Users
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/applications">
              Applications
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
