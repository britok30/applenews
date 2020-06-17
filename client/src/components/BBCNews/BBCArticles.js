import React, { Component, Fragment } from "react";
import BBC from "./BBC";
import axios from "axios";

class BBCArticles extends Component {
    state = {
        news: [],
        loading: true,
    };

    componentDidMount() {
        axios
            .get("/getBBCArts")
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
                    <h2 className="sub-heading top-lead">BBC News</h2>
                </div>
                <div className="card-columns">
                    {loading && !news ? (
                        <h1>Loading...</h1>
                    ) : (
                        news.map((article, index) => {
                            return (
                                <BBC
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

export default BBCArticles;
