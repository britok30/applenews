import React, { Fragment } from "react";
import news from "../../img/news.png";

const Article = props => {
  const { title, link, img, desc, source } = props;
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img src={!img ? news : img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a href={link} className="btn btn-primary">
                  News Article
                </a>
                <p>Source: {source}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Article;
