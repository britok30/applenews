import React from "react";
import logo from "../img/logo.png";
import moment from "moment";

const Navbar = () => {
  let date = moment().format("MMMM DD");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <a className="navbar-brand" href="index.html">
        <img className="logo" src={logo} alt="" />
        News
        <p className="date">{date}</p>
      </a>
    </nav>
  );
};

export default Navbar;
