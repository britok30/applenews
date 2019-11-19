import React, { Component, Fragment } from "react";
import axios from "axios";

class TopNews extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=10${process.env.API_KEY}`
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

export default TopNews;
