import "./Navbar.css";
import React from "react";
import Logo from "../../Assets/Logo.png";
import {
	Link,
} from "react-router-dom";

const Navbar=() => {
	return (
		<div className="navbar-container">
			<div className="logo-container">
				<img src={Logo} alt="Logo Movie App" className="logo-image" />
			</div>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="movies">Movies</Link>
					</li>
					<li>
						<Link to="/private">My Favorite</Link>
					</li>
					<li>
						<Link to="/genre">Genre</Link>
					</li>
					<li>
						<Link to="/private">Account</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Navbar;
