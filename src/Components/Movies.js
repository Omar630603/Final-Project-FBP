import React from "react";
import "../Index.css";
import { Routes, Route, useMatch } from "react-router-dom";
import movieImage from "../Assets/blackwidow.jpg";

function Movies() {
  const match = useMatch("genre/movies/:genre");
  return (
    <div>
      <h2 className="genre-name">{`${match.params["genre"]}`}</h2>
      <div className="movies">
        <div className="movie-container">
          <div className="movie-image">
            <img src={movieImage} alt="Black Widow" />
          </div>
          <div className="movie-info">
            <h3>Black Widow</h3>
            <p>A great movie</p>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/detail/:movie" element={<Movie />}></Route>
      </Routes>
    </div>
  );
}
function Movie() {
  const match = useMatch("/detail/:movie");
  return (
    <div>
      <h3>{`${match.params["movie"]}`}</h3>
    </div>
  );
}

export default Movies;
