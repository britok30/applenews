import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Articles from "./TopArticles/Articles";
import SearchBar from "./Search/SearchBar";
import Footer from "./Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="container">
            <Navbar />
            <div className="row top-level">
              <div className="col-md-2">
                <SideBar />
              </div>
              <div className="col-md-10">
                <Switch>
                  <Route exact path="/" component={Articles} />
                  <Route exact path="/search" component={SearchBar} />
                </Switch>
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
