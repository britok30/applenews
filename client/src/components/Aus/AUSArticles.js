import React, { Component, Fragment } from "react";
import AUSArticle from "./AUSArticle";
import axios from "axios";

class AUSArticles extends Component {
  state = {
    news: [],
    loading: true,
  };

  componentDidMount() {
    axios
        .get(
            "/getAustraliaArts"
        )
        .then((res) => {
            console.log(res.data.articles);
            this.setState({
                news: res.data.articles,
                loading: false,
            });
        })
        .catch((err) => console.log(err));
  }

  render() {
    const { loading, news } = this.state;
    return (
      <Fragment>
        <div className="row">
          <h2 className="sub-heading top-lead">
            Top Stories in AUS{" "}
            <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
              🇦🇺
            </span>
          </h2>
        </div>
        <div className="card-columns">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            news.map((article, index) => {
              return (
                <AUSArticle
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

export default AUSArticles;
