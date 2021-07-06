import React, { useState, useEffect, Suspense } from 'react';
import Card from '../Card';
import Header from '../Header';
import axios from 'axios';

const EntertainmentArts = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios
            .get('/getEntertainmentArts')
            .then((res) => {
                setNews(res.data.articles);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <div className="row">
                <Header title="Entertainment" />
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
                                    img={article.urlToImage}
                                    desc={article.description}
                                    source={article.source.name}
                                    buttonText="News Article"
                                />
                            </Suspense>
                        );
                    })}
            </div>
        </div>
    );
};

export default EntertainmentArts;
