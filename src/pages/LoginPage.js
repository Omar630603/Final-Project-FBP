import React from "react";
import {
	useNavigate,
	useLocation,
} from "react-router-dom";



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
		<div>
			<p>You must log in to view the page at {from.pathname}</p>
			<button onClick={login}>Log in</button>
		</div>
	);
}

export default LoginPage;