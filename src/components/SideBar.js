import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <h3 className="newshead">Apple News</h3>
      <ul>
        <li>
          <Link to="/search">Search News</Link>
        </li>
        <li>
          <Link to="/business">Business</Link>
        </li>
        <li>
          <Link to="/entertainment">Entertainment</Link>
        </li>
        <li>
          <Link to="/health">Health</Link>
        </li>
        <li>
          <Link to="/science">Science</Link>
        </li>
        <li>
          <Link to="/sports">Sports</Link>
        </li>
        <li>
          <Link to="/tech">Technology</Link>
        </li>
        <li>
          <a
            className="api"
            target="_blank"
            rel="noreferrer noopener"
            href="https://newsapi.org/"
          >
            News API
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
