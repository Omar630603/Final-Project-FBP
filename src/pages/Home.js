import React from "react";
import "../Index.css";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import AboutUs from "../Components/AboutUs/AboutUs";
import Footer from "../Components/Footer/Footer";

const Home=() => {
	return (
		<div className="home-container">
			<Jumbotron />
			<WhyChooseUs/>
			<AboutUs/>
			<Footer/>
		</div>
	);
};

export default Home;
