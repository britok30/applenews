import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import moment from "moment";

const Navbar = () => {
  let date = moment().format("MMMM DD");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <Link className="navbar-brand" to="/">
        <img className="logo" src={logo} alt="" />
        News
        <p className="date">{date}</p>
      </Link>
    </nav>
  );
};

export default Navbar;
