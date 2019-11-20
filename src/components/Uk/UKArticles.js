import React, { Component, Fragment } from "react";
import UKArticle from "./UKArticle";
import Spinner from "../../img/spinner.gif";
import axios from "axios";

class UKArticles extends Component {
  state = {
    news: [],
    pageSize: 20,
    loading: true,
    country: "gb"
  };

  componentDidMount() {
    const { pageSize, country } = this.state;
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_API_KEY}`
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
          <h2 className="sub-heading top-lead">
            Top Stories in UK{" "}
            <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
              🇬🇧
            </span>
          </h2>
        </div>
        <div className="row">
          {loading ? (
            <Spinner />
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
