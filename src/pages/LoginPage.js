import React from "react";
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

// Auth
import { firebaseauth } from "../Firebase/FirebaseAuth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

import useFirebaseAuthentication from "../Firebase/FirebaseAuthentication ";
// Style
import "./Style/LoginPage.css";

// Assets
import Logo from "../Assets/Logo.png";
import GoogleLogo from "../Assets/Google Logo.png";

const LoginPage = () => {
  const authUser = useFirebaseAuthentication(firebaseauth);

  const [loginEmail, setLoginEmail] = useState("");
  const [error, setError] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const provider = new GoogleAuthProvider();

  let navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (authUser) {
    navigate("/myfavorite", { from });
  }
  // Login Function
  const login = (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(firebaseauth, loginEmail, loginPassword)
        .then((result) => {
          console.log(result);
          navigate("/myfavorite", { from });
        })
        .catch((error) => {
          setError(error.code.split("/")[1]);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const registerWithGoogle = () => {
    try {
      signInWithPopup(firebaseauth, provider).then((result) => {
        console.log(result);
        navigate("/myfavorite", { from });
      });
    } catch (error) {}
  };

  return (
    <div className="login-container">
      <div>
        <div className="logo-login-container">
          <img src={Logo} alt="Logo Movie App" className="logo-image" />
        </div>
        {error && <p className="errorMessage">{error}</p>}
        <br />
        <div className="box-login-container">
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <label>Email</label>
              <br />
              <input
                type="email"
                name="email"
                id="email-form"
                placeholder="Enter Your Email"
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <br />
              <input
                type="password"
                name="password"
                id="password-form"
                placeholder="Enter Your Password"
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
              />
            </div>
            <button onClick={login} className="button-login">
              Login
            </button>
          </form>
          <p className="small-text">
            Dont Have Account? <Link to="/register"> Register</Link>
          </p>
          <hr />
          <p className="center-text">or</p>
          <button onClick={registerWithGoogle} className="google-button-login">
            <img src={GoogleLogo} alt="Google Logo" className="google-logo" />
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
