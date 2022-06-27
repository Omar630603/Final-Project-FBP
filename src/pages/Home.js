import React from "react";
import "../Index.css";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import AboutUs from "../Components/AboutUs/AboutUs";

const Home = () => {
  return (
    <div className="home-container">
      <Jumbotron />
      <WhyChooseUs />
      <AboutUs />
    </div>
  );
};

export default Home;
