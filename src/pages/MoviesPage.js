import React from "react";
import "../Index.css";
import db from "../Firebase/FirebaseFirestore";
import {collection,onSnapshot} from "firebase/firestore";
import MovieItem from "../Components/MovieItem/MovieItem";
import {useState,useEffect} from "react";


const MoviesPage=() => {
  const [movie,setMovie]=useState([]);

  useEffect(() => {
    onSnapshot(collection(db,"movies"),(snapshot) => {
      setMovie(snapshot.docs.map((doc) => doc.data()));
    });
  },[movie]);

  return (
    <div className="home-container">
      <div className="movie-title-container">
        <h2>List of Movie</h2>
      </div>
      <div className="movie-item-container">
            {movie.map((value) => {
              return <MovieItem key={value.id} movie={value} />;
            })}
      </div>
    </div>
  );
};

export default MoviesPage;
