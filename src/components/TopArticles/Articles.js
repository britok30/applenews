import React, { Component, Fragment } from "react";
import axios from "axios";

class Articles extends Component {
  state = {
    news: [],
    pageSize: 10
  };

  componentDidMount() {
    const { pageSize } = this.state;
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&${process.env.API_KEY}`
      )
      .then(res => {
        console.log(res.data.articles);
        this.setState({
          news: res.data.articles
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return <Fragment>
      
    </Fragment>;
  }
}

export default Articles;
