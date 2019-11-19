import React, { Component, Fragment } from "react";
import axios from "axios";

class SearchBar extends Component {
  state = {
    searchTerm: "",
    pageSize: 50
  };

  onSubmit = e => {
    e.preventDefault();
    const { pageSize } = this.state;
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${this.searchTerm}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${pageSize}`
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
        <form class="form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="label" htmlFor="name">
              Search
            </label>
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
