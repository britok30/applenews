import React, { Component, Fragment } from "react";
import Health from "./Health";
import axios from "axios";

class HealthArts extends Component {
  state = {
    news: [],
    loading: true,
  };

  componentDidMount() {
    axios
        .get(
            "/getHealthArts"
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
                <h2 className="sub-heading top-lead">Health</h2>
            </div>
            <div className="card-columns">
                {news && news.map((article, index) => {
                        return (
                            <Health
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

export default HealthArts;
