import React from 'react';
import news from '../img/news.png';

const Card = ({ title, link, img, desc, source, buttonText }) => {
    return (
        <div>
            <div className="card">
                <img
                    src={!img ? news : img}
                    className="card-img-top card-img"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title title">{title}</h5>
                    <p className="card-text desc">{desc}</p>
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn btn-primary article-btn"
                    >
                        {buttonText}
                    </a>
                    <p className="source">Source: {source}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
