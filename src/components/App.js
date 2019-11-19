import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import SearchBar from "./Search/SearchBar";
import SideBar from "./SideBar";
import Articles from "./TopArticles/Articles";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "../App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="container">
            <Navbar />
            <div className="row">
              <div className="col-md-12">
                <SearchBar />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <SideBar />
              </div>
              <div className="col-md-10">
                <Articles />
              </div>
              <Footer />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
