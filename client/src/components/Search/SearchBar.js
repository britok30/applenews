import React, { Component, Fragment } from "react";
import Search from "./Search";
import axios from "axios";

class SearchBar extends Component {
    state = {
        searchTerm: "",
        pageSize: 20,
        loading: true,
        news: [],
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { searchTerm } = this.state;
        axios
            .get(
                `https://gnews.io/api/v3/search?q=${searchTerm}&token=693dfadc0ec318b62ae2455f3db67390`
            )
            .then((res) => {
                console.log(res.data.articles);
                this.setState({
                    news: res.data.articles,
                    loading: false,
                });
            })
            .catch((err) => console.log(err));
    };

    onChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    };

    render() {
        const { news } = this.state;

        return (
            <Fragment>
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            className="search"
                            type="text"
                            name="name"
                            value={this.state.searchTerm}
                            placeholder="Search News"
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="row">
                        <h2 className="sub-heading top-lead">Search</h2>
                    </div>
                    <div className="card-columns">
                        {news && news.map((article, index) => {
                                return (
                                    <Search
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
                </form>
            </Fragment>
        );
    }
}

export default SearchBar;
