import React from "react";
import "../Index.css";
import { useState, useEffect } from "react";
import GenreButtons from "../Components/GenreButtons";
import db from "../Firebase/FirebaseFirestore";
import { collection, onSnapshot } from "firebase/firestore";
import { Route, Routes } from "react-router-dom";
import Movies from "../Components/Movies";


const Genre = () => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "genre"), (snapshot) => {
      setGenre(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        })
      );
    });
  }, [genre]);

  return (
    <div className="home-container">
      <div className="genre-container">
        <h2>Genre</h2>
        <h3>Select a Genre</h3>
      </div>
      <div>
        <div className="genre-buttons">
          <ul>
            {genre.map((value) => {
              return <GenreButtons key={value.id} genre={value} />;
            })}
          </ul>
        </div>
        <div>
          <Routes>
            {genre.map((value) => {
              console.log(value);
              return (
                <Route
                  path={`/movies/${value.name}`}
                  element={<Movies key={value.id} genre={value} />}
                ></Route>
              );
            })}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Genre;
