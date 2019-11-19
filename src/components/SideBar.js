import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <h3 className="newshead">
        <Link to="/">
          <i class="icon ion-logo-apple"></i> Apple News
        </Link>
      </h3>
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
            className="twitter"
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/AppleNews?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          >
            <i class="icon ion-logo-twitter"></i> Twitter
          </a>
        </li>
        <li>
          <a
            className="api"
            target="_blank"
            rel="noreferrer noopener"
            href="https://newsapi.org/"
          >
            <i class="icon ion-logo-designernews"></i> News API
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
