import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Navbar = () => {
  let date = moment().format("MMMM DD");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <Link className="navbar-brand" to="/">
        <i className="logo ion-logo-apple"></i>
        News<span className="js">.js</span>
        <p className="date">{date}</p>
      </Link>
    </nav>
  );
};

export default Navbar;
