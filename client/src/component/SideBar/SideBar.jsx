import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar  bg-danger">
      <h6 className="font-weight-bold text-black">New in Germany ?</h6>
      <ul>
        <li>
          <i className="far fa-building"></i>&nbsp;&nbsp;
          <Link to="/Living">Living</Link>
        </li>
        <li>
          <i className="fas fa-user-graduate"></i>&nbsp;&nbsp;
          <Link to="/Education">Education</Link>
        </li>
        <li>
          <i className="fas fa-gavel"></i>&nbsp;&nbsp;
          <Link to="/GermanyLaw">Germany </Link>
        </li>
        <li>
          <i className="fab fa-leanpub "></i>&nbsp;&nbsp;
          <Link to="/LearnGermany">Learn German</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
