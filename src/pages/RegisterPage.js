import {React,useState} from "react";
import {
	useNavigate,
	useLocation,
} from "react-router-dom";

// Auth
import {firebaseauth} from "../Firebase/FirebaseAuth";
import {createUserWithEmailAndPassword} from "firebase/auth";

// Style
import "./Style/RegisterPage.css";

// Assets
import Logo from "../Assets/Logo.png";
import GoogleLogo from "../Assets/Google Logo.png";

const RegisterPage=() => {

	const [registerEmail,setRegisterEmail]=useState("");
	const [registerPassword,setRegisterPassword]=useState("");
	// const [user,setUser]=useState("");

	let navigate=useNavigate();
	let location=useLocation();
	let {from}=location.state||{from: {pathname: "/"}};


	// register Function
	const register=async () => {
		try {
			const user=await createUserWithEmailAndPassword(firebaseauth,registerEmail,registerPassword);
			console.log(user);
			navigate("/private",{from});
		}
		catch(error) {
			console.log(error.message);
		}
	};



	return (
		<div className="register-container">
			<div>
				<div className="logo-register-container">
					<img src={Logo} alt="Logo Movie App" className="logo-image" />
				</div>
				<br />
				<div className="box-register-container">
					<h1>Register</h1>
					<form>
						<div className="form-group">
							<label>Email</label>
							<br />
							<input type="email" name="email" id="email-form" placeholder="Enter Your Email"
								onChange={(event) => {
									setRegisterEmail(event.target.value);
								}}
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<br />
							<input type="password" name="password" id="password-form" placeholder="Enter Your Password"
								onChange={(event) => {
									setRegisterPassword(event.target.value);
								}}
							/>
						</div>
						<button onClick={register} className="button-register">Register</button>
					</form>
					<hr />
					<p className="center-text">or</p>
					<button className="google-button-register"><img src={GoogleLogo} alt="Google Logo" className="google-logo" />
						Register With Google</button>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;