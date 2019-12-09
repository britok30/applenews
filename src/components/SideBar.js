import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <h3 className="newshead">
        <Link to="/">
          <i className="icon ion-logo-apple"></i> Apple News
        </Link>
      </h3>
      <ul>
        <li>
          <Link to="/search" className="searchnews">Search News</Link>
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
          <Link to="/uk">Apple News UK</Link>
        </li>
        <li>
          <Link to="/can">Apple News Canada</Link>
        </li>
        <li>
          <Link to="/aus">Apple News Australia</Link>
        </li>
        <h3 className="newshead">Favorites</h3>
        <li>
          <Link to="/nyt">NY Times</Link>
        </li>
        <li>
          <Link to="/wsj">Wall Street Journal</Link>
        </li>
        <li>
          <Link to="/bbc">BBC-News</Link>
        </li>
        <li>
          <Link to="/tc">TechCrunch</Link>
        </li>
        <li>
          <a
            className="twitter"
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/AppleNews?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          >
            <i className="icon ion-logo-twitter"></i> Twitter
          </a>
        </li>
        <li>
          <a
            className="api"
            target="_blank"
            rel="noreferrer noopener"
            href="https://newsapi.org/"
          >
            <i className="icon ion-logo-designernews"></i> News API
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
