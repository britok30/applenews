import React, { Component, Fragment } from "react";
import Business from "./Business";
import axios from "axios";

class BusinessArts extends Component {
    state = {
        news: [],
        loading: true,
    };

    componentDidMount() {
        axios
            .get("/getBusinessArts")
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
                    <h2 className="sub-heading top-lead">Business</h2>
                </div>
                <div className="card-columns">
                    {news && news.map((article, index) => {
                            return (
                                <Business
                                    key={index}
                                    title={article.title}
                                    link={article.url}
                                    img={article.image}
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

export default BusinessArts;
