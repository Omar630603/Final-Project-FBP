import React from "react";
import "../Index.css";
import GenreButtons from "../Components/GenreButtons";
const Genre = () => {
  return (
    <div className="home-container">
      <div className="genre-container">
        <h2>Genre</h2>
        <h3>Select a Genre</h3>
      </div>
      <GenreButtons />
    </div>
  );
};

export default Genre;
