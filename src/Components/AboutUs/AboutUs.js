// Dependencies
import React from "react";

// Css
import "./AboutUs.css";


const AboutUs=() => {
	return (
		<div className="aboutus-container">
			<div className="aboutus-text-container">
				<div className="text-group">
					<h3>About Us</h3>
				</div>
			</div>
			<div className="aboutus-card-container">
				<div className="card-container">
					<div className="image-container">
						<img src={Logo} alt="" className="image-icon" />
					</div>
					<div className="text-container">
						<p className="heading-card">XX MOVIE</p>
						<p className="tagline-card">XX Movie is a website that provides you to find your suitable movies based on the Genres 
                        and available for any movies from USA, UK, South Korea and Indonesia. We are here to give you an endless solution to bring your movie experience better! <br><br>
                        All information, data, or any material on this website is the property of XX Cinema and
                        belong to the official rights holders of the relevant brands, logos, materials.</p>
					</div>
				</div>
			</div>
		</div>
		
	);
};

export default AboutUs;