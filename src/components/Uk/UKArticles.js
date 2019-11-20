import React, { Component, Fragment } from "react";
import UKArticle from "./UKArticle";
import axios from "axios";

class UKArticles extends Component {
  state = {
    news: [],
    pageSize: 20,
    loading: true
  };

  componentDidMount() {
    const { pageSize } = this.state;
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=gb&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_API_KEY}`
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
        <div className="row">
          <h2 className="sub-heading top-lead">Top Stories in UK 🇬🇧</h2>
        </div>
        <div className="row">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            news.map((article, index) => {
              return (
                <UKArticle
                  key={index}
                  title={article.title}
                  link={article.url}
                  img={article.urlToImage}
                  desc={article.description}
                  source={article.source.name}
                />
              );
            })
          )}
        </div>
      </Fragment>
    );
  }
}

export default UKArticles;
