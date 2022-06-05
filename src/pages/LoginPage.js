import {React, useState} from "react";
import {
	useNavigate,
	useLocation,
	Link
} from "react-router-dom";

// Auth
import {firebaseauth} from "../Firebase/FirebaseAuth";
import {signInWithEmailAndPassword } from "firebase/auth";

// Style
import "./Style/LoginPage.css";

// Assets
import Logo from "../Assets/Logo.png";
import GoogleLogo from "../Assets/Google Logo.png";

const LoginPage=() => {

	const [loginEmail,setLoginEmail]=useState("");
	const [loginPassword,setLoginPassword]=useState("");
	const [user,setUser]=useState("");

	let navigate=useNavigate();
	let location=useLocation();
	let {from}=location.state||{from: {pathname: "/"}};


	// Login Function
	const login=async ()=>  {
		try {
			const user=await signInWithEmailAndPassword(firebaseauth,loginEmail,loginPassword)
			console.log(user)
			navigate("/private",{from})
		}
		catch(error) {
			console.log(error.message)
		}
	}
	
	// const fakeAuth={
	// 	isAuthenticated: false,
	// 	authenticate(cb) {
	// 		fakeAuth.isAuthenticated=true;
	// 		setTimeout(cb,100);
	// 	},
	// 	signout(cb) {
	// 		fakeAuth.isAuthenticated=false;
	// 		setTimeout(cb,100);
	// 	},
	// };



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
							<input type="email" name="email" id="email-form" placeholder="Enter Your Email"
								onChange={(event) => {
									setLoginEmail(event.target.value)
								}}
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<br />
							<input type="password" name="password" id="password-form" placeholder="Enter Your Password"
								onChange={(event) => {
									setLoginPassword(event.target.value);
								}}
							/>
						</div>
						<button onClick={login} className="button-login">Login</button>
					</form>
					<p className="small-text">Dont Have Account?  <Link to="/register"> Register</Link></p>
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