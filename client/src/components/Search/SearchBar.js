import React, { useState, Suspense } from 'react';
import Card from '../Card';
import Header from '../Header';
import axios from 'axios';

const SearchBar = () => {
    const [news, setNews] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        axios
            .get(
                `https://gnews.io/api/v4/search?q=${searchTerm}&token=693dfadc0ec318b62ae2455f3db67390`
            )
            .then((res) => {
                setNews(res.data.articles);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <form className="form" onSubmit={onSubmit} autoComplete="off">
                <div className="form-group">
                    <input
                        className="search"
                        type="text"
                        name="name"
                        value={searchTerm}
                        placeholder="Search News"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="row">
                    <Header title="Search" />
                </div>
                <div className="card-columns">
                    {news &&
                        news.map((article, index) => {
                            return (
                                <Suspense
                                    key={index}
                                    fallback={
                                        <h1 style={{ color: '#fff' }}>
                                            Loading news...
                                        </h1>
                                    }
                                >
                                    <Card
                                        key={index}
                                        title={article.title}
                                        link={article.url}
                                        img={article.image}
                                        desc={article.description}
                                        source={article.source.name}
                                        buttonText="News Article"
                                    />
                                </Suspense>
                            );
                        })}
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
