import React from "react";
import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <div>
      <h3 className="newshead">Apple News</h3>
      <ul>
        <li>
          <Link to="/business">Business></Link>
        </li>
        <li>
          <a href="#">Entertainment</a>
        </li>
        <li>
          <a href="#">Health</a>
        </li>
        <li>
          <a href="#">Science</a>
        </li>
        <li>
          <a href="#">Sports</a>
        </li>
        <li>
          <a href="#">Technology</a>
        </li>
        <li>
          <a className="api" href="https://newsapi.org/">
            News API
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
