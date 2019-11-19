import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import "../App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <Navbar />
        </div>
      </Fragment>
    );
  }
}

export default App;
