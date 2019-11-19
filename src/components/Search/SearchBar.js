import React, { Component, Fragment } from "react";
import axios from "axios";

class SearchBar extends Component {
  state = {
    searchTerm: "",
    pageSize: 20,
    news: []
  };

  onSubmit = e => {
    e.preventDefault();

    const { pageSize, searchTerm } = this.state;
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${pageSize}`
      )
      .then(res => {
        console.log(res.data.articles);
        this.setState({
          news: res.data.articles
        });
      })
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              className="search"
              type="text"
              name="name"
              placeholder="Search News"
              onChange={this.onChange}
            />
          </div>
        </form>
      </Fragment>
    );
  }
}

export default SearchBar;

// https://newsapi.org/v2/top-headlines?q=&API_KEY

// <Link
//   to="route"
//   target="_blank"
//   onClick={event => {
//     event.preventDefault();
//     window.open(this.makeHref("route"));
//   }}
// />;