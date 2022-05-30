import React from "react";
import "../Index.css";
import { Routes, Route, Link, useMatch, useParams } from "react-router-dom";
function Movies() {
  const match = useMatch("genre/movies/*");
  console.log();
  return (
    <div>
      <h2>{`${match.params["*"]}`}</h2>
      <Link to={`${match.pathname}`}>
        <div className="movies">
          <div className="movie-container">
            <div className="movie-image"></div>
            <div className="movie-info"></div>
          </div>
        </div>
      </Link>
      <Routes>
        <Route path={`${match.pathname}/:topicId`} element={<Movie />}></Route>
      </Routes>
    </div>
  );
}
function Movie() {
  let { topicId } = useParams();
  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

export default Movies;
