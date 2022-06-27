import "./Navbar.css";
import React from "react";
import Logo from "../../Assets/Logo.png";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { firebaseauth } from "../../Firebase/FirebaseAuth";
import { signOut } from "firebase/auth";
import useFirebaseAuthentication from "../../Firebase/FirebaseAuthentication ";

const Navbar = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const authUser = useFirebaseAuthentication(firebaseauth);

  const logout = async () => {
    await signOut(firebaseauth);
    navigate("/login", { from });
  };
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
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/private">My Favorite</Link>
          </li>
          <li>
            <Link to="/genre">Genre</Link>
          </li>
          <li>
            {authUser === null ? (
              <Link to="/private">Login</Link>
            ) : (
              <button className="signOutBtn" onClick={logout}>
                Sign Out
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
