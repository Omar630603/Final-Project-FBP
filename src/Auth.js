import "./Index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Genre from "./Pages/Genre";
import Movies from "./Pages/Movies";

export default function Auth() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/genre/*" element={<Genre />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/genre" element={<Genre />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/private" element={<LoginPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
