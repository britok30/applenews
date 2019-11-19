import React, { Component, Fragment } from "react";
import axios from "axios";

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${this.searchTerm}&apiKey=${process.env.API_KEY}&pageSize=50`
      )
      .then(res => {
        console.log(res.data.articles);
        this.setState({
          news: res.data.articles
        });
      })
      .catch(err => console.log(err));
  }

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
            <label htmlFor="name"></label>
            <input type="text" name="name" />
        </form>
      </Fragment>
    );
  }
}

export default SearchBar;

// https://newsapi.org/v2/top-headlines?q=&API_KEY
