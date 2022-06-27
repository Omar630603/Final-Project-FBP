// Dependencies
import React from "react";

// Css
import "./WhyChooseUs.css";

// Assets
import Updated from "../../Assets/updated.png";
import GoodQuality from "../../Assets/good-quality.png";
import Trusted from "../../Assets/trusted.png";


const WhyChooseUs=() => {
	return (
		<div className="whychooseus-container">
			<div className="whychooseus-text-container">
				<div className="text-group">
					<h3>Why You Should Choose Us</h3>
					<p>Find reason why movieapp is best for your choices</p>
				</div>
			</div>
			<div className="whychooseus-card-container">
				<div className="card-container">
					<div className="image-container">
						<img src={Updated} alt="" className="image-icon" />
					</div>
					<div className="text-container">
						<p className="heading-card">Updated</p>
						<p className="tagline-card">Provide Updated Movie</p>
					</div>
				</div>
				<div className="card-container">
					<div className="image-container">
						<img src={GoodQuality} alt="" className="image-icon" />
					</div>
					<div className="text-container">
						<p className="heading-card">Good Quality</p>
						<p className="tagline-card">Provide HD Movies</p>
					</div>
				</div>
				<div className="card-container">
					<div className="image-container">
						<img src={Trusted} alt="" className="image-icon" />
					</div>
					<div className="text-container">
						<p className="heading-card">Trusted</p>
						<p className="tagline-card">Trusted Movies Site</p>
					</div>
				</div>

			</div>
		</div>
		
	);
};

export default WhyChooseUs;
