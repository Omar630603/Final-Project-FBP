import React from "react";
import "../Index.css";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";

const Home=() => {
	return (
		<div className="home-container">
			<Jumbotron />
			<WhyChooseUs/>
		</div>
	);
};

export default Home;
