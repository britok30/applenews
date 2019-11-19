import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import SearchBar from "./Search/SearchBar";
import SideBar from "./SideBar";
import Articles from "./TopArticles/Articles";
import "../App.css";

class App extends Component {
  render() {
    return (
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
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
