import React, { Component, Fragment } from "react";
import Article from "./Article";
import axios from "axios";

class Articles extends Component {
  state = {
    news: [],
    pageSize: 50,
    loading: true
  };

  componentDidMount() {
    const { pageSize } = this.state;
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then(res => {
        console.log(res.data.articles);
        this.setState({
          news: res.data.articles,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <h2 class="sub-heading top-lead">Top Stories</h2>
        if (loading){" "}
        {<h1 style={{ fontSize: "5rem", color: "#fff" }}>Loading...</h1>} else
        {news.map(new => {
          return (
            <Article
              key={new.source.id}
              title={new.title}
              url={new.url}
              image={new.urlToImage}
              desc={new.description}
              source={new.source.name}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default Articles;
