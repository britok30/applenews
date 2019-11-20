import React, { Component, Fragment } from "react";
import Science from "./Science";
import Spinner from "../../img/spinner.gif";
import axios from "axios";

class ScienceArts extends Component {
  state = {
    news: [],
    pageSize: 20,
    loading: true,
    category: "science"
  };

  componentDidMount() {
    const { pageSize, category } = this.state;
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_API_KEY}`
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
          <h2 className="sub-heading top-lead">Science</h2>
        </div>
        <div className="row">
          {loading ? (
            <Spinner />
          ) : (
            news.map((article, index) => {
              return (
                <Science
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

export default ScienceArts;
