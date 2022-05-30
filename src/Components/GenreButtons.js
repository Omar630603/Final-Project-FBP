import React from "react";
import "../Index.css";
import { Link, Route, Routes, useMatch } from "react-router-dom";
import Movies from "./Movies";

const Genrebuttons = () => {
  const match = useMatch("/genre/*");
  return (
    <div>
      <div className="genre-buttons">
        <ul>
          <li className="link-active">
            <Link to={`${match.pathnameBase}/movies/action`}>Action</Link>
          </li>
          <li>
            <Link to={`${match.pathnameBase}/movies/romance`}>Romance</Link>
          </li>
          <li>
            <Link to={`${match.pathnameBase}/movies/drama`}>Drama</Link>
          </li>
          <li>
            <Link to={`${match.pathnameBase}/movies/comedy`}>Comedy</Link>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path="/movies/:genre" element={<Movies />}></Route>
        </Routes>
      </div>
    </div>
  );
};
export default Genrebuttons;
