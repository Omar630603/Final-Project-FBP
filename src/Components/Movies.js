import React from "react";
import "../Index.css";
import { Routes, Route, useMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, query, where, doc, getDocs } from "firebase/firestore";
import db from "../Firebase/FirebaseFirestore";

function Movies(props) {
  const match = useMatch("genre/movies/:genre");
  const [movie, setMovie] = useState([]);

  const genreRef = doc(db, "genre", props.genre.id);
  const moviesQuery = query(
    collection(db, "movies"),
    where("genreID", "==", genreRef)
  );
  useEffect(() => {
    getDocs(moviesQuery).then((querySnapshot) => {
      setMovie(
        querySnapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        })
      );
    });
  }, [movie]);
  return (
    <div>
      <h2 className="genre-name">{`${match.params["genre"]}`}</h2>
      <h3 className="genre-name">{`${props.genre.description}`}</h3>
      <div className="movies">
        {movie.map((value) => {
          return (
            <div className="movie-container">
              <div className="movie-image">
                <img src={value.cover} alt="Black Widow" />
              </div>
              <div className="movie-info">
                <h3>{value.name}</h3>
                <p>{value.released_date}</p>
              </div>
            </div>
          );
        })}
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
