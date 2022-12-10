import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navber = () => {
  const navContainer = (
    <React.Fragment>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#projects">About </a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </React.Fragment>
  );

  return (
    <div>
      <nav className="navbar fixed  bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navContainer}
            </ul>
          </div>
          <Link to="/home" className="btn border-none btn-ghost normal-case text-xl">
            Mern Stack
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navContainer}</ul>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
