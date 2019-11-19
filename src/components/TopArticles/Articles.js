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
    const { loading, news } = this.state;
    return (
      <Fragment>
        <h2 class="sub-heading top-lead">Top Stories</h2>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          news.map(article => {
            return (
              <Article
                key={article.source.id}
                title={article.title}
                link={article.url}
                img={article.urlToImage}
                desc={article.description}
                source={article.source.name}
              />
            );
          })
        )}
      </Fragment>
    );
  }
}

export default Articles;
