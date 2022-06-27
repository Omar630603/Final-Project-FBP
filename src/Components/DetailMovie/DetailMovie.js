import React from "react";
import "./DetailMovie.css";

const DetailMovie = (props) => {
  return (
    <div>
      <h1 className="movie-detail-title">{props.detail.name}</h1>
      <div className="movie-detail-container">
        <div className="movie-detail-image">
          <img src={`${props.detail.cover}`} alt="" />
        </div>
        <div className="movie-detail-info">
          <div className="detail-info-group1">
            <h3>Synopsis</h3>
            <p>{props.detail.synopsis}</p>
          </div>
          <div className="detail-info-group">
            <div className="group">
              <h3>Director</h3>
              <p>{props.detail.director}</p>
            </div>
            <div className="group">
              <h3>Released Date</h3>
              <p>{props.detail.released_date}</p>
            </div>
            <div className="group">
              <h3>
                Rating: <small>{props.detail.rating}/5</small>
              </h3>
            </div>
          </div>
          <div className="link">
            <h3>
              Link to Streaming :{" "}
              <a href={`${props.detail.linkStreaming}`} target="blank">
                [Link Streaming]
              </a>
            </h3>
          </div>
          <button className="button-add-wishlist">Add To Whislist</button>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
