import React from "react";
import { useState, useEffect } from "react";
import "../Index.css";
import { Link, Route, Routes, useMatch } from "react-router-dom";
import Movies from "./Movies";
import db from "../Firebase/FirebaseFirestore";
import {collection, getDocs} from "firebase/firestore"; 



const Genrebuttons = () => {
  const match=useMatch("/genre/*");
  
  const [genre,setGenre]=useState([]);

  useEffect(() => {
    db.collection("genre").onSnapshot((snapshot) => {
      setGenre(
        snapshot.docs.map((doc) => ({
          name: doc.name,
          description: doc.description,
        }))
      );
    });
    console.log({genre});
  },[]);

  return (
    <div>
      <div className="genre-buttons">
        <ul>
          {/* {genre.map(({value}) => {
            return (
              <li className="link-active">
                <Link to={`${match.pathnameBase}/movies/${value.name}`}>${value.name}</Link>
              </li>
            )
          })} */}
          
         
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
