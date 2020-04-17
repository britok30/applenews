import React, { Fragment } from "react";
import news from "../../img/news.png";

const WallStreet = (props) => {
    const { title, link, img, desc, source } = props;
    return (
        <Fragment>
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
                        News Article
                    </a>
                    <p className="source">Source: {source}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default WallStreet;
