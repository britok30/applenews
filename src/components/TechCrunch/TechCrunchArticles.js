import React, { Component, Fragment } from "react";
import TechCrunch from "./TechCrunch";
import axios from "axios";

class TechCrunchArticles extends Component {
  state = {
    news: [],
    pageSize: 25,
    loading: true,
    source: "techcrunch"
  };

  componentDidMount() {
    const { pageSize, source } = this.state;
    axios
        .get(
            `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=${source}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_API_KEY}`
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
          <h2 className="sub-heading top-lead">TechCrunch</h2>
        </div>
        <div className="card-columns">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            news.map((article, index) => {
              return (
                <TechCrunch
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

export default TechCrunchArticles;
