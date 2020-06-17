import React, { Component, Fragment } from "react";
import CANArticle from "./CANArticle";
import axios from "axios";

class CANArticles extends Component {
  state = {
    news: [],
    loading: true,
  };

  componentDidMount() {
    axios
        .get(
            "/getCanadaArts"
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
    const { news } = this.state;
    return (
        <Fragment>
            <div className="row">
                <h2 className="sub-heading top-lead">
                    Top Stories in CAN{" "}
                    <span
                        role="img"
                        aria-labelledby="jsx-a11y/accessible-emoji"
                    >
                        🇨🇦
                    </span>
                </h2>
            </div>
            <div className="card-columns">
                {news && news.map((article, index) => {
                        return (
                            <CANArticle
                                key={index}
                                title={article.title}
                                link={article.url}
                                img={article.urlToImage}
                                desc={article.description}
                                source={article.source.name}
                            />
                        );
                    })
                }
            </div>
        </Fragment>
    );
  }
}

export default CANArticles;
