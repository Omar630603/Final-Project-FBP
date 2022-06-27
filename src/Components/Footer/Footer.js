import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "-50px",
          }}
        >
          MovieApp
        </h1>
      </div>
      <div className="footer-container">
        <h2
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "-50px",
          }}
        >
          Search and Find the Most Recommended Movies to Watch!
        </h2>
        <ul>
          <li>
            <Link to="movies">Movies</Link>
          </li>
          <li>
            <Link to="/private">My Favorite</Link>
          </li>
          <li>
            <Link to="/genre">Genre</Link>
          </li>
        </ul>
        <div className="footer-container"></div>
      </div>
    </div>
  );
};
export default Footer;
