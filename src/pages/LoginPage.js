import React from "react";
import {
	useNavigate,
	useLocation,
} from "react-router-dom";

// Style
import "./Style/LoginPage.css";

// Assets
import Logo from "../Assets/Logo.png";
import GoogleLogo from "../Assets/Google Logo.png";

const LoginPage=() => {
	
	const fakeAuth={
		isAuthenticated: false,
		authenticate(cb) {
			fakeAuth.isAuthenticated=true;
			setTimeout(cb,100);
		},
		signout(cb) {
			fakeAuth.isAuthenticated=false;
			setTimeout(cb,100);
		},
	};


	let navigate=useNavigate();
	let location=useLocation();
	let {from}=location.state||{from: {pathname: "/"}};
	let login=() => {
		fakeAuth.authenticate(() => {
			navigate("/private",{from});
		});
	};
	return (
		<div className="login-container">
			{/* <p>You must log in to view the page at {from.pathname}</p>
			<button onClick={login}>Log in</button> */}
			

			<div>
				<div className="logo-login-container">
					<img src={Logo} alt="Logo Movie App" className="logo-image" />
				</div>
				<br/>
				<div className="box-login-container">
					<h1>Login</h1>
					<form>
						<div className="form-group">
							<label>Email</label>
							<br/>
							<input type="email" name="email" id="email-form" placeholder="Enter Your Email"/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<br />
							<input type="password" name="password" id="password-form" placeholder="Enter Your Password" />
						</div>
						<button className="button-login">Login</button>
					</form>
					<hr />
					<p className="center-text">or</p>
					<button className="google-button-login"><img src={GoogleLogo} alt="Google Logo" className="google-logo"/>
						Login With Google</button>
				</div>
			</div>

		</div>
	);
}

export default LoginPage;