import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBar ">
      <nav className="navbar navbar-expand-lg navbar-dark Header HoverEffect bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <Link className="nav-link" to="/Home">
                HOME <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Service">
                SERVICE
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Support">
                SUPPORT
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs">
                CONTACT US
              </Link>
            </li>
          </ul>

          <div className="dropdown">
            <button
              className="btn btn-dark btn-sm"
              type="button"
              id=""
              data-toggle=""
            >
              Learn a New Language
            </button>
            <button
              className="btn btn-dark btn-sm dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Helper/Helpseeker
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/Home">
                I want to help
              </Link>
              <Link className="dropdown-item" to="/Home">
                I am Searching for Help
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
