// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Css
import "./Jumbotron.css";

// Assets
import JumbotronImage from "../../Assets/jumbotron-image.png";

const Jumbotron = () => {
  return (
    <div className="jumbotron-container">
      <div className="jumbotron-text-container">
        <h1 className="heading">Find Your Favorite Movie Here!</h1>
        <p className="tagline">
          Movieapp provides various movies around the world. Your can discover
          what movies that suits with your preference. You can create your own
          favorite movies list here by Login.
        </p>
        <div className="button-container">
          <Link to="/private">
            <button className="button-joinus">Join Us</button>
          </Link>
        </div>
      </div>
      <div className="jumbotron-image-container">
        <img
          src={JumbotronImage}
          alt="JumbotronImage"
          className="jumbotron-image"
        />
      </div>
    </div>
  );
};

export default Jumbotron;
