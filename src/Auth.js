import "./Index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Genre from "./Pages/Genre";
import MoviesPage from "./Pages/MoviesPage";
import DetailPage from "./Pages/DetailPage";
import MyFavorite from "./Pages/MyFavorite";
import db from "./Firebase/FirebaseFirestore";
import {collection,onSnapshot} from "firebase/firestore";
import {useState,useEffect} from "react";


export default function Auth() {


  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/genre/*" element={<Genre />}></Route>
          <Route path="/movies/*" element={<MoviesPage />}></Route>
          <Route path="/genre" element={<Genre />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/private" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/myfavorite" element={<MyFavorite />}></Route>
          <Route path="/detail/*" element={<DetailPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
