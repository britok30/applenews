import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
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
            <Articles />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
