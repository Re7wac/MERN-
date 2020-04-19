import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="row d-flex bg-light m-auto ">
      <div className=" col-md-4 d-flex justify-content-center">
        <h1 className="bg-light">
          Deutschland <span className="text-dark">Tür</span>
        </h1>
      </div>

      <div className="col-md-3 d-flex justify-content-center m-auto ">
        <div>
          <Link className="m-2">
            <i className="fab fa-instagram "></i>
          </Link>
          <Link className="m-2">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link className="m-2">
            <i className="fab fa-twitter "></i>
          </Link>
          <Link className="m-2">
            <i className="fab fa-youtube"></i>
          </Link>
        </div>
      </div>

      <div className="col-md-4 d-flex justify-content-center m-auto   navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href="#">
              العربية
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="#">
              فارسی
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="#">
              English
            </Link>
          </li>

          <li className="nav-item ">
            <Link className="nav-link" href="#">
              German
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-1 h1 m-auto d-flex justify-content-center ">
        <Link className=" ">
          <i class="fa fa-user-circle" aria-hidden="true"></i>
        </Link>
      </div>
      {/* <div class="col-1 d-flex justify-content-center align-items-center mb-1">
          <Link class="btn btn btn-dark" href="#">
            Sign up
          </Link>
        </div> */}
    </div>
  );
};

export default Header;
